import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { loginRequest } from "../../src/lib/laravelAuth";

export default function SignIn() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "", // هنبعته كـ email
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
    if (serverError) setServerError("");
  };

  const validateForm = () => {
    const n: Record<string, string> = {};
    if (!formData.username.trim())
      n.username = isRTL
        ? "اسم المستخدم أو البريد الإلكتروني مطلوب"
        : "Username or email is required";
    if (!formData.password)
      n.password = isRTL ? "كلمة المرور مطلوبة" : "Password is required";
    setErrors(n);
    return Object.keys(n).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setServerError("");
    try {
      await loginRequest({
        email: formData.username, // بنبعت username كأنه email
        password: formData.password,
        remember: formData.rememberMe,
      });

      // بعد نجاح الجلسة، اعمل refresh/توجيه حسب رغبتك
      // window.location.href = "/"; // تفعيل لو عايز ريفرش كامل
      navigate("/"); // أو وجّه لصفحة الداشبورد/الهوم
    } catch (err: any) {
      if (err?.type === "validation") {
        const fe: Record<string, string> = {};
        if (err.errors?.email?.[0]) fe.username = err.errors.email[0];
        if (err.errors?.password?.[0]) fe.password = err.errors.password[0];
        setErrors(fe);
      } else if (err?.type === "csrf") {
        setServerError(
          isRTL
            ? "انتهت الجلسة، حدّث الصفحة وحاول ثانيةً"
            : "Session expired, refresh and try again.",
        );
      } else {
        setServerError(isRTL ? "فشل تسجيل الدخول" : "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-gold-500 text-4xl font-fantasy font-bold glow-text mb-2">
                Era of Legends
              </div>
              <h1
                className={`text-3xl font-bold text-white mb-2 ${isRTL ? "font-arabic" : ""}`}
              >
                {t("signin.title")}
              </h1>
              <p className={`text-gold-300 ${isRTL ? "font-arabic" : ""}`}>
                {t("signin.subtitle")}
              </p>
            </div>

            {/* Card */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {serverError && (
                  <div className="text-red-400 text-sm mb-2">{serverError}</div>
                )}

                {/* Username/Email */}
                <div>
                  <label
                    htmlFor="username"
                    className={`block text-sm font-medium text-gold-300 mb-2 ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {t("signin.username")}
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder={t("signin.usernamePlaceholder")}
                    className={`w-full px-4 py-3 bg-navy-900/70 border border-gold-500/30 rounded-lg text-white placeholder-gold-400/50 focus:outline-none focus:border-gold-500 transition-colors ${isRTL ? "font-arabic text-right" : ""}`}
                    autoComplete="username"
                  />
                  {errors.username && (
                    <p
                      className={`text-red-400 text-sm mt-1 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className={`block text-sm font-medium text-gold-300 mb-2 ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {t("signin.password")}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder={t("signin.passwordPlaceholder")}
                    className={`w-full px-4 py-3 bg-navy-900/70 border border-gold-500/30 rounded-lg text-white placeholder-gold-400/50 focus:outline-none focus:border-gold-500 transition-colors ${isRTL ? "text-right" : ""}`}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <p
                      className={`text-red-400 text-sm mt-1 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Remember & Forgot */}
                <div
                  className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <label
                    className={`flex items-center space-x-2 cursor-pointer ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-gold-500 bg-navy-900 border-gold-500/30 rounded focus:ring-gold-500 focus:ring-2"
                    />
                    <span
                      className={`text-sm text-gold-300 ${isRTL ? "font-arabic" : ""}`}
                    >
                      {t("signin.rememberMe")}
                    </span>
                  </label>
                  <Link
                    to="/forgot-password"
                    className={`text-sm text-gold-500 hover:text-gold-400 transition-colors ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t("signin.forgotPassword")}
                  </Link>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform ${
                    loading
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:scale-105"
                  } shadow-lg hover:shadow-glow-gold ${isRTL ? "font-arabic" : ""}`}
                >
                  {loading
                    ? isRTL
                      ? "جاري الدخول..."
                      : "Signing in..."
                    : t("signin.submitButton")}
                </button>

                {/* Register link */}
                <div className="text-center">
                  <Link
                    to="/register"
                    className={`text-gold-300 hover:text-gold-500 transition-colors ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t("signin.registerLink")}
                  </Link>
                </div>
              </form>
            </div>

            {/* Note */}
            <p
              className={`text-center text-gold-300/70 text-xs mt-6 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("signin.securityNote") ??
                (isRTL
                  ? "الدخول مؤمّن عبر CSRF وجلسات المتصفح."
                  : "Sign-in secured via CSRF & sessions.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
