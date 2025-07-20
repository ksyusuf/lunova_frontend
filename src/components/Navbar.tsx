export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-800/90 via-pink-700/90 to-blue-900/90 backdrop-blur-md text-white p-4 rounded-b-2xl shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold tracking-wide drop-shadow">Lunova</a>
        <div className="space-x-4">
          <a href="/login" className="hover:underline hover:text-pink-100 transition">Giriş Yap</a>
          <a href="/register" className="hover:underline hover:text-pink-100 transition">Kayıt Ol</a>
        </div>
      </div>
    </nav>
  );
}
