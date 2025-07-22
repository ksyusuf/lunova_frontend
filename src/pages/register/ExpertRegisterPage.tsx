import { useState } from "react";
import api from "../../api";

export default function ExpertRegisterPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gsm_no: "",
    tc_kimlik: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: [] }); // clear field error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");
    setLoading(true);
    try {
      const response = await api.post("/api/v1/accounts/register/", {
        ...form,
        role: "expert",
      });
      setSuccess("Kayıt başarılı! Giriş yapabilirsiniz.");
    } catch (err: any) {
      if (err.response?.data && typeof err.response.data === "object") {
        setErrors(err.response.data);
      } else {
        setErrors({ non_field_errors: ["Kayıt başarısız."] });
      }
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Uzman Kayıt</h2>
      {errors.non_field_errors && (
        <div className="text-red-600 text-sm mb-2">
          {errors.non_field_errors.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}
        </div>
      )}
      {success && <div className="text-green-600 text-sm mb-2">{success}</div>}
      <form onSubmit={handleSubmit} className="bg-white/80 rounded-lg shadow p-6 w-full max-w-sm flex flex-col gap-4">
        <div>
          <input
            type="text"
            name="first_name"
            placeholder="İsim"
            value={form.first_name}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          {errors.first_name && errors.first_name.map((msg, i) => (
            <div key={i} className="text-red-600 text-xs mt-1">{msg}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            placeholder="Soyisim"
            value={form.last_name}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          {errors.last_name && errors.last_name.map((msg, i) => (
            <div key={i} className="text-red-600 text-xs mt-1">{msg}</div>
          ))}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          {errors.email && errors.email.map((msg, i) => (
            <div key={i} className="text-red-600 text-xs mt-1">{msg}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            name="gsm_no"
            placeholder="Telefon Numarası"
            value={form.gsm_no}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          {errors.gsm_no && errors.gsm_no.map((msg, i) => (
            <div key={i} className="text-red-600 text-xs mt-1">{msg}</div>
          ))}
        </div>
        <div>
          <input
            type="text"
            name="tc_kimlik"
            placeholder="TC Kimlik No"
            value={form.tc_kimlik}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          {errors.tc_kimlik && errors.tc_kimlik.map((msg, i) => (
            <div key={i} className="text-red-600 text-xs mt-1">{msg}</div>
          ))}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Şifre"
            value={form.password}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          {errors.password && errors.password.map((msg, i) => (
            <div key={i} className="text-red-600 text-xs mt-1">{msg}</div>
          ))}
        </div>
        <div>
          <input
            type="password"
            name="password2"
            placeholder="Şifre (Tekrar)"
            value={form.password2}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
            required
          />
          {errors.password2 && errors.password2.map((msg, i) => (
            <div key={i} className="text-red-600 text-xs mt-1">{msg}</div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-800 via-pink-700 to-blue-900 text-white font-semibold py-2 rounded shadow hover:opacity-90 transition"
          disabled={loading}
        >
          {loading ? "Kayıt Olunuyor..." : "Kayıt Ol"}
        </button>
      </form>
    </div>
  );
} 