import { useNavigate } from "react-router-dom";

export default function SelectRegisterTypePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-8 text-white mt-8">Kayıt Tipi Seçin</h2>
      <div className="flex gap-8">
        <button
          onClick={() => navigate("/register/client")}
          className="bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-gray-800/90 bg-gray-900/90 text-white border border-purple-200/40 font-semibold py-8 px-12 rounded-lg shadow-lg hover:scale-105 transition text-xl cursor-pointer"
        >
          Danışan Olarak Kayıt Ol
        </button>
        <button
          onClick={() => navigate("/register/expert")}
          className="bg-gradient-to-br from-gray-800/90 via-gray-900/80 to-gray-800/90 bg-gray-900/90 text-white border border-purple-200/40 font-semibold py-8 px-12 rounded-lg shadow-lg hover:scale-105 transition text-xl cursor-pointer"
        >
          Uzman Olarak Kayıt Ol
        </button>
      </div>
    </div>
  );
} 