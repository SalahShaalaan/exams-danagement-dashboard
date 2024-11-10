import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = { username: "", password: "" };
    let isValid = true;

    if (username.length < 3) {
      newErrors.username =
        "Username must be at least 3 characters | اسم المستخدم يجب أن يكون 3 أحرف على الأقل";
      isValid = false;
    }
    if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters | كلمة المرور يجب أن تكون 6 أحرف على الأقل";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      localStorage.setItem("userRole", role);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username);

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="hidden lg:flex lg:w-1/2 xl:w-2/3 h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,65,85,0.1)_0,rgba(51,65,85,0)_100%)]" />
        <div className="relative text-center space-y-6">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-2">
              Exam Management System
            </h1>
            <h2 className="text-3xl font-bold text-white text-right mb-4">
              نظام إدارة الاختبارات
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 xl:w-1/3 px-6 py-12 lg:px-12 relative">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Sign In | تسجيل الدخول
            </h2>
            <p className="text-slate-400 mb-1">Welcome Back | مرحباً بعودتك</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Username | اسم المستخدم
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200 ${
                    errors.username ? "border-red-500" : "border-slate-700"
                  }`}
                  placeholder="Enter your username | أدخل اسم المستخدم"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Password | كلمة المرور
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200 ${
                    errors.password ? "border-red-500" : "border-slate-700"
                  }`}
                  placeholder="Enter your password | أدخل كلمة المرور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-slate-300 mb-1"
                >
                  Access Level | مستوى الصلاحية
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition duration-200"
                  disabled={isLoading}
                >
                  <option value="admin">Administrator | مدير النظام</option>
                  <option value="superadmin">
                    Super Administrator | مدير النظام الأعلى
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition duration-200 shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed relative"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Signing In... | جاري تسجيل الدخول...</span>
                </div>
              ) : (
                <>
                  <span className="block">Sign In</span>
                  <span className="block">تسجيل الدخول</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-slate-400 text-sm">
              Having trouble logging in? | هل تواجه مشكلة في تسجيل الدخول؟
            </p>
            <p className="text-slate-400 text-sm">
              Contact Support | تواصل مع الدعم الفني:{" "}
              <a href="#" className="text-emerald-400 hover:text-emerald-300">
                support@exams.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 transform animate-fadeIn text-center max-w-sm mx-4">
            <div className="mb-4">
              <svg
                className="mx-auto h-12 w-12 text-emerald-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              You're all set!
            </h3>
            <h4 className="text-lg font-medium text-gray-900 mb-4">
              !تم تسجيل دخولك بنجاح
            </h4>
            <p className="text-sm text-gray-500">Redirecting to dashboard...</p>
            <p className="text-sm text-gray-500">
              ...جاري التوجيه إلى لوحة التحكم
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
