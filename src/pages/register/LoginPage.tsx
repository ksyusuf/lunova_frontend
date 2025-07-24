import { useState, useEffect } from "react";
import api from "../../api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const registeredEmail = localStorage.getItem("registered_email");
    if (registeredEmail) {
      setEmail(registeredEmail);
      localStorage.removeItem("registered_email");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await api.post(
        "/api/v1/accounts/login/",
        { email, password }
      );
      setRedirecting(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Giriş başarısız.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4 text-white mt-8">Giriş Yap</h2>
      <form onSubmit={handleSubmit} className="bg-white/80 rounded-lg shadow p-6 w-full max-w-sm flex flex-col gap-4">
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-gray-800/90 bg-gray-900/90 text-white border border-purple-200/40 font-semibold py-2 rounded shadow hover:opacity-90 transition flex items-center justify-center gap-2 cursor-pointer"
          disabled={loading || redirecting}
        >
          {(loading || redirecting) && (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
          )}
          {loading || redirecting ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </form>
    </div>
  );
}
