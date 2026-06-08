import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Donor', contactNumber: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-[calc(100vh-130px)] flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Join FoodBridge</h2>
        
        <form className="space-y-4" onSubmit={handleRegister}>
          {error && <div className="bg-red-50 text-red-500 p-3 rounded text-sm text-center">{error}</div>}
          
          <input type="text" required placeholder="Organization Name" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            onChange={(e) => setFormData({...formData, name: e.target.value})} />
            
          <input type="email" required placeholder="Email Address" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            onChange={(e) => setFormData({...formData, email: e.target.value})} />
            
          <input type="password" required placeholder="Password" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            onChange={(e) => setFormData({...formData, password: e.target.value})} />
            
          <input type="text" required placeholder="Contact Number" 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
            onChange={(e) => setFormData({...formData, contactNumber: e.target.value})} />

          <div className="pt-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">I am a:</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="role" value="Donor" checked={formData.role === 'Donor'} onChange={(e) => setFormData({...formData, role: e.target.value})} className="text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-700">Food Donor (Restaurant/Store)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="role" value="NGO" checked={formData.role === 'NGO'} onChange={(e) => setFormData({...formData, role: e.target.value})} className="text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-700">NGO / Shelter</span>
              </label>
            </div>
          </div>

          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-6 transition">
            Register Account
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          <Link to="/login" className="text-primary hover:underline">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
