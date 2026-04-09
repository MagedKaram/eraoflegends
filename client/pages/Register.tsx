import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { registerRequest } from "../../src/lib/laravelAuth";

export default function Register() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
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
      n.username = isRTL ? "اسم المستخدم مطلوب" : "Username is required";
    else if (formData.username.length < 3)
      n.username = isRTL ? "الاسم ≥ 3 أحرف" : "Username must be ≥ 3 chars";

    if (!formData.email.trim())
      n.email = isRTL ? "البريد الإلكتروني مطلوب" : "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      n.email = isRTL ? "البريد غير صحيح" : "Email is invalid";

    if (!formData.password)
      n.password = isRTL ? "كلمة المرور مطلوبة" : "Password is required";
    else if (formData.password.length < 6)
      n.password = isRTL ? "المرور ≥ 6 أحرف" : "Password must be ≥ 6 chars";

    if (!formData.confirmPassword)
      n.confirmPassword = isRTL
        ? "تأكيد كلمة المرور مطلوب"
        : "Password confirmation is required";
    else if (formData.password !== formData.confirmPassword)
      n.confirmPassword = isRTL
        ? "كلمتا المرور غير متطابقتين"
        : "Passwords do not match";

    if (!formData.acceptTerms)
      n.acceptTerms = isRTL
        ? "يجب الموافقة على الشروط"
        : "You must accept the terms";

    setErrors(n);
    return Object.keys(n).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setServerError("");
    try {
      await registerRequest({
        name: formData.username, // Laravel expects 'name'
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
        terms: formData.acceptTerms, // Jetstream (إن وُجد)
      });

      // بعد النجاح: ريفرش أو توجيه
      // window.location.href = "/";
      navigate("/"); // أو غيّر للمسار المناسب عندك
    } catch (err: any) {
      if (err?.type === "validation") {
        const fe: Record<string, string> = {};
        if (err.errors?.name?.[0]) fe.username = err.errors.name[0];
        if (err.errors?.email?.[0]) fe.email = err.errors.email[0];
        if (err.errors?.password?.[0]) fe.password = err.errors.password[0];
        setErrors(fe);
      } else if (err?.type === "csrf") {
        setServerError(
          isRTL
            ? "انتهت الجلسة، حدّث الصفحة وحاول ثانيةً"
            : "Session expired, refresh and try again.",
        );
      } else {
        setServerError(isRTL ? "فشل إنشاء الحساب" : "Registration failed");
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
                {t("register.title")}
              </h1>
              <p className={`text-gold-300 ${isRTL ? "font-arabic" : ""}`}>
                {t("register.subtitle")}
              </p>
            </div>

            {/* Card */}
            <div className="bg-navy-800/50 backdrop-blur-sm border border-gold-500/20 rounded-lg p-6 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {serverError && (
                  <div className="text-red-400 text-sm mb-2">{serverError}</div>
                )}

                {/* Username */}
                <div>
                  <label
                    htmlFor="username"
                    className={`block text-sm font-medium text-gold-300 mb-2 ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {t("register.username")}
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder={t("register.usernamePlaceholder")}
                    className={`w-full px-4 py-3 bg-navy-900/70 border border-gold-500/30 rounded-lg text-white placeholder-gold-400/50 focus:outline-none focus:border-gold-500 transition-colors ${isRTL ? "font-arabic text-right" : ""}`}
                  />
                  {errors.username && (
                    <p
                      className={`text-red-400 text-sm mt-1 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {errors.username}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-gold-300 mb-2 ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {t("register.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("register.emailPlaceholder")}
                    className={`w-full px-4 py-3 bg-navy-900/70 border border-gold-500/30 rounded-lg text-white placeholder-gold-400/50 focus:outline-none focus:border-gold-500 transition-colors ${isRTL ? "text-right" : ""}`}
                  />
                  {errors.email && (
                    <p
                      className={`text-red-400 text-sm mt-1 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className={`block text-sm font-medium text-gold-300 mb-2 ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {t("register.password")}
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder={t("register.passwordPlaceholder")}
                    className={`w-full px-4 py-3 bg-navy-900/70 border border-gold-500/30 rounded-lg text-white placeholder-gold-400/50 focus:outline-none focus:border-gold-500 transition-colors ${isRTL ? "text-right" : ""}`}
                  />
                  {errors.password && (
                    <p
                      className={`text-red-400 text-sm mt-1 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className={`block text-sm font-medium text-gold-300 mb-2 ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {t("register.confirmPassword")}
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder={t("register.confirmPasswordPlaceholder")}
                    className={`w-full px-4 py-3 bg-navy-900/70 border border-gold-500/30 rounded-lg text-white placeholder-gold-400/50 focus:outline-none focus:border-gold-500 transition-colors ${isRTL ? "text-right" : ""}`}
                  />
                  {errors.confirmPassword && (
                    <p
                      className={`text-red-400 text-sm mt-1 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms */}
                <div>
                  <label
                    className={`flex items-start space-x-3 cursor-pointer ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 text-gold-500 bg-navy-900 border-gold-500/30 rounded focus:ring-gold-500 focus:ring-2"
                    />
                    <span
                      className={`text-sm text-gold-300 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {t("register.termsAccept")}{" "}
                      <Link
                        to="/terms"
                        className="text-gold-500 hover:text-gold-400 underline"
                      >
                        {t("register.termsLink")}
                      </Link>{" "}
                      {t("register.and")}{" "}
                      <Link
                        to="/privacy"
                        className="text-gold-500 hover:text-gold-400 underline"
                      >
                        {t("register.privacyLink")}
                      </Link>
                    </span>
                  </label>
                  {errors.acceptTerms && (
                    <p
                      className={`text-red-400 text-sm mt-1 ${isRTL ? "font-arabic text-right" : ""}`}
                    >
                      {errors.acceptTerms}
                    </p>
                  )}
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
                      ? "جاري إنشاء الحساب..."
                      : "Creating account..."
                    : t("register.submitButton")}
                </button>

                {/* Login link */}
                <div className="text-center">
                  <Link
                    to="/login"
                    className={`text-gold-300 hover:text-gold-500 transition-colors ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t("register.loginLink")}
                  </Link>
                </div>
              </form>
            </div>

            <p
              className={`text-center text-gold-300/70 text-xs mt-6 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("register.securityNote") ??
                (isRTL
                  ? "التسجيل مؤمّن عبر CSRF وجلسات المتصفح."
                  : "Registration secured via CSRF & sessions.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
