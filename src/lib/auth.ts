// src/lib/auth.ts
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ""; // مثال: "http://localhost:8000"

async function csrf() {
  const res = await fetch(`${BASE_URL}/sanctum/csrf-cookie`, {
    credentials: "include",
  });
  if (!res.ok) throw new Error("CSRF cookie failed");
}

export async function loginRequest({
  email,
  password,
  remember,
}: {
  email: string;
  password: string;
  remember: boolean;
}) {
  await csrf();
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include", // مهم للكوكيز
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email, password, remember }),
  });

  // نجاح Laravel مع JSON غالبًا 204 No Content أو 200
  if (res.status === 204 || res.status === 200) return { ok: true };

  if (res.status === 422) {
    const data = await res.json();
    // Laravel validation: { message, errors: { email: [], password: [] } }
    throw { type: "validation", errors: data.errors ?? {} };
  }

  if (res.status === 401) {
    throw { type: "auth", message: "Invalid credentials" };
  }

  const text = await res.text();
  throw { type: "unknown", message: text || "Login failed" };
}

export async function fetchMe() {
  const res = await fetch(`${BASE_URL}/api/user`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Failed to load user");
  return res.json();
}
