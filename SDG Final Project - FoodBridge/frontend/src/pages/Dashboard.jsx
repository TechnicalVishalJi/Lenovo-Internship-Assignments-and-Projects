import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Clock, MapPin, Package } from 'lucide-react';

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [formData, setFormData] = useState({ foodType: '', quantity: '', pickupLocation: '', expiryTime: '' });
  const navigate = useNavigate();
  
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    fetchDonations();
  }, [navigate, token]);

  const fetchDonations = async () => {
    try {
      // In a real app, donors might fetch their own, NGOs fetch all available
      const { data } = await axios.get('http://localhost:5000/api/donations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Filter locally for demo purposes: Donors see their own, NGOs see all available
      if (user?.role === 'Donor') {
        setDonations(data.filter(d => d.donorId._id === user._id || d.donorId === user._id));
      } else {
        setDonations(data.filter(d => d.status === 'Available'));
      }
    } catch (error) {
      console.error('Error fetching donations:', error);
    }
  };

  const handlePostDonation = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/donations', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFormData({ foodType: '', quantity: '', pickupLocation: '', expiryTime: '' });
      fetchDonations();
      alert('Donation posted successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Error posting donation');
    }
  };

  const handleClaim = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/donations/${id}/claim`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Donation claimed successfully! Please pick it up before expiry.');
      fetchDonations();
    } catch (error) {
      alert(error.response?.data?.message || 'Error claiming donation');
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome, {user.name}</h1>

      {user.role === 'Donor' && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 border-t-4 border-primary">
          <h2 className="text-xl font-bold mb-4">Post a New Food Donation</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handlePostDonation}>
            <input type="text" required placeholder="Food Type (e.g. 50 Sandwiches)" 
              className="px-3 py-2 border rounded" value={formData.foodType} onChange={(e) => setFormData({...formData, foodType: e.target.value})} />
            <input type="text" required placeholder="Quantity / Weight" 
              className="px-3 py-2 border rounded" value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})} />
            <input type="text" required placeholder="Pickup Location Address" 
              className="px-3 py-2 border rounded" value={formData.pickupLocation} onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})} />
            <input type="datetime-local" required 
              className="px-3 py-2 border rounded" value={formData.expiryTime} onChange={(e) => setFormData({...formData, expiryTime: e.target.value})} />
            <button type="submit" className="md:col-span-2 bg-primary text-white py-2 rounded hover:bg-secondary font-semibold transition">
              Post Donation
            </button>
          </form>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4">{user.role === 'Donor' ? 'Your Active Postings' : 'Available Food Donations'}</h2>
      
      {donations.length === 0 ? (
        <p className="text-gray-500 bg-white p-8 text-center rounded-lg shadow">No active donations found right now.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div key={donation._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-green-50 px-4 py-3 border-b border-green-100 flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${donation.status === 'Available' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                  {donation.status}
                </span>
                {donation.donorId?.name && <span className="text-sm font-medium text-gray-600">{donation.donorId.name}</span>}
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center"><Package className="mr-2" size={20}/> {donation.foodType}</h3>
                <p className="text-gray-600 mb-2"><strong>Quantity:</strong> {donation.quantity}</p>
                <p className="text-gray-600 mb-2 flex items-center"><MapPin className="mr-2 text-gray-400" size={16}/> {donation.pickupLocation}</p>
                <p className="text-red-500 text-sm flex items-center mt-4"><Clock className="mr-1" size={16}/> Expires: {new Date(donation.expiryTime).toLocaleString()}</p>
              </div>
              {user.role === 'NGO' && donation.status === 'Available' && (
                <div className="px-4 py-3 bg-gray-50 border-t">
                  <button onClick={() => handleClaim(donation._id)} className="w-full bg-primary text-white py-2 rounded hover:bg-secondary font-semibold transition">
                    Claim Food
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
