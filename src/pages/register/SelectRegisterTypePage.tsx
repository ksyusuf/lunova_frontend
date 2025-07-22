import { useNavigate } from "react-router-dom";

export default function SelectRegisterTypePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-8">Kayıt Tipi Seçin</h2>
      <div className="flex gap-8">
        <button
          onClick={() => navigate("/register/expert")}
          className="bg-gradient-to-r from-purple-800 via-pink-700 to-blue-900 text-white font-semibold py-8 px-12 rounded-lg shadow-lg hover:scale-105 transition text-xl"
        >
          Uzman Olarak Kayıt Ol
        </button>
        <button
          onClick={() => navigate("/register/client")}
          className="bg-gradient-to-r from-blue-900 via-pink-700 to-purple-800 text-white font-semibold py-8 px-12 rounded-lg shadow-lg hover:scale-105 transition text-xl"
        >
          Danışan Olarak Kayıt Ol
        </button>
      </div>
    </div>
  );
} 