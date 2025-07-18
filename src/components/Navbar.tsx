export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold">Lunova</a>
        <div className="space-x-4">
          <a href="/login" className="hover:underline">Giriş Yap</a>
          <a href="/register" className="hover:underline">Kayıt Ol</a>
        </div>
      </div>
    </nav>
  );
}
