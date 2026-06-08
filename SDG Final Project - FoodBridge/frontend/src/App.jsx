import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { LogOut, Heart } from 'lucide-react';

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-primary font-bold text-2xl">
                <Heart className="mr-2" />
                FoodBridge
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {token ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-primary font-medium">Dashboard</Link>
                  <span className="text-sm text-gray-500 hidden sm:block">({user?.role}) {user?.name}</span>
                  <button onClick={handleLogout} className="flex items-center text-red-500 hover:text-red-700">
                    <LogOut size={18} className="mr-1" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-primary font-medium">Login</Link>
                  <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition font-medium">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">FoodBridge - SDG 2: Zero Hunger</p>
          <p className="text-gray-400 text-sm">A web application dedicated to eliminating food waste and hunger by connecting donors with NGOs.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
