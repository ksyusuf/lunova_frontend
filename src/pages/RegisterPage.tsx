import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    role: "expert",
    tc_kimlik: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/v1/accounts/register/", form);
      setSuccess("Kayıt başarılı! Giriş yapabilirsiniz.");
    } catch (err: any) {
      setError(err.response?.data || "Kayıt başarısız.");
      console.log(err); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
      <form onSubmit={handleSubmit} className="bg-white/80 rounded-lg shadow p-6 w-full max-w-sm flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={form.username}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={form.email}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={form.password}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <input
          type="password"
          name="password2"
          placeholder="Şifre (Tekrar)"
          value={form.password2}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        >
          <option value="expert">Uzman</option>
          <option value="client">Danışan</option>
        </select>
        <input
          type="text"
          name="tc_kimlik"
          placeholder="TC Kimlik No"
          value={form.tc_kimlik}
          onChange={handleChange}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-800 via-pink-700 to-blue-900 text-white font-semibold py-2 rounded shadow hover:opacity-90 transition"
          disabled={loading}
        >
          {loading ? "Kayıt Olunuyor..." : "Kayıt Ol"}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
      </form>
    </div>
  );
}
