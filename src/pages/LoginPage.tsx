import { useState } from "react";
import api from "../api";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await api.post(
        "/api/v1/accounts/login/",
        { username, password }
      );
      setSuccess("Başarıyla giriş yapıldı!");
      window.location.href = "/";
    } catch (err: any) {
      setError(err.response?.data?.detail || "Giriş başarısız.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
      <form onSubmit={handleSubmit} className="bg-white/80 rounded-lg shadow p-6 w-full max-w-sm flex flex-col gap-4">
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={e => setUsername(e.target.value)}
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
          className="bg-gradient-to-r from-purple-800 via-pink-700 to-blue-900 text-white font-semibold py-2 rounded shadow hover:opacity-90 transition"
          disabled={loading}
        >
          {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
      </form>
    </div>
  );
}
