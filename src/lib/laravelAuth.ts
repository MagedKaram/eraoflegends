function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return decodeURIComponent(parts.pop()!.split(";").shift()!);
  return null;
}

const API_ORIGIN = (import.meta as any)?.env?.VITE_API_ORIGIN as
  | string
  | undefined;

function buildUrl(pathname: string) {
  if (!API_ORIGIN) return pathname;
  return new URL(pathname, API_ORIGIN).toString();
}

export async function ensureCsrf() {
  const res = await fetch(buildUrl("/sanctum/csrf-cookie"), {
    credentials: "include",
  });
  if (!res.ok) throw new Error("csrf-failed");
  const xsrf = getCookie("XSRF-TOKEN");
  if (!xsrf) throw new Error("no-xsrf-cookie");
  return xsrf;
}

async function postForm(url: string, data: Record<string, string>) {
  const xsrf = await ensureCsrf();
  const body = new URLSearchParams();
  Object.entries(data).forEach(([k, v]) => body.append(k, v));
  const res = await fetch(buildUrl(url), {
    method: "POST",
    credentials: "include",
    headers: { Accept: "application/json", "X-XSRF-TOKEN": xsrf },
    body,
  });
  if (res.ok || res.status === 204 || res.status === 302) return res;
  if (res.status === 422) {
    const d = await res.json().catch(() => ({}));
    throw { type: "validation", errors: d.errors ?? {} };
  }
  if (res.status === 419) throw { type: "csrf" };
  throw { type: "unknown", message: `HTTP ${res.status}` };
}

export function loginRequest(args: {
  email: string;
  password: string;
  remember?: boolean;
}) {
  return postForm("/login", {
    email: args.email,
    password: args.password,
    ...(args.remember ? { remember: "on" } : {}),
  });
}

export function registerRequest(args: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  terms?: boolean;
}) {
  return postForm("/register", {
    name: args.name,
    email: args.email,
    password: args.password,
    password_confirmation: args.password_confirmation,
    ...(args.terms ? { terms: "on" } : {}),
  });
}
