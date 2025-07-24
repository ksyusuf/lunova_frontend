import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState<{ first_name: string; last_name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/api/v1/accounts/me/")
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await api.post(
        "/api/v1/accounts/logout/",
        {}
      );
      setUser(null);
      window.location.reload();
    } catch {
      setUser(null);
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-800/90 via-pink-700/90 to-blue-900/90 backdrop-blur-md text-white p-4 rounded-b-2xl shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold tracking-wide drop-shadow">Lunova</a>
        <div className="space-x-4 flex items-center">
          {loading ? (
            <div className="flex space-x-2">
              <div className="w-20 h-6 bg-gray-300/50 rounded animate-pulse" />
              <div className="w-20 h-6 bg-gray-300/50 rounded animate-pulse" />
            </div>
          ) : user ? (
            <>
              <span className="font-semibold">Merhaba, {user.first_name} {user.last_name}!</span>
              <button
                onClick={handleLogout}
                className="ml-4 bg-gradient-to-r from-blue-900 via-pink-700 to-purple-800 text-white font-semibold py-1 px-3 rounded shadow hover:opacity-90 transition"
                disabled={loading}
              >
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline hover:text-pink-100 transition">Giriş Yap</Link>
              <Link to="/register" className="hover:underline hover:text-pink-100 transition">Kayıt Ol</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
