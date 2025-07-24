import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState<{ first_name: string; last_name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [logoutLoading, setLogoutLoading] = useState(false);

  useEffect(() => {
    api.get("/api/v1/accounts/me/")
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      await api.post("/api/v1/accounts/logout/", {});
    } catch (e) {
      // hata olsa da devam et
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, 700);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-blue-950/90 backdrop-blur-md text-white p-4 rounded-b-2xl shadow-lg">
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
                className="ml-4 bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-gray-800/90 bg-gray-900/90 text-white border border-purple-200/40 font-semibold py-2 px-4 rounded shadow hover:opacity-90 transition flex items-center justify-center gap-2 min-w-[90px] min-h-[32px] cursor-pointer"
                disabled={loading || logoutLoading}
              >
                {logoutLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                ) : (
                  "Çıkış Yap"
                )}
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
