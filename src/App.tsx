import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ExpertListPage from './pages/ExpertListPage';
import ExpertProfilePage from './pages/ExpertProfilePage';
import ClientDashboardPage from './pages/ClientDashboardPage';
import ExpertApplicationPage from './pages/ExpertApplicationPage';
import ExpertDashboardPage from './pages/ExpertDashboardPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/experts" element={<ExpertListPage />} />
            <Route path="/expert-profile" element={<ExpertProfilePage />} />
            <Route path="/client-dashboard" element={<ClientDashboardPage />} />
            <Route path="/expert-application" element={<ExpertApplicationPage />} />
            <Route path="/expert-dashboard" element={<ExpertDashboardPage />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
