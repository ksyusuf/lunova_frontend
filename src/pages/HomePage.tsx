import logo from "../assets/logo-white.png";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4 text-center">
      <img src={logo} alt="Lunova Logo" className="mx-auto mb-6 w-56 h-auto" />
      <h1 className="text-4xl font-bold mb-4">Lunova'ya Hoş Geldiniz</h1>
      <p className="text-lg text-gray-700">Platformumuzda uzmanları keşfedin ve danışmanlık alın.</p>
    </div>
  );
}
