import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Bridging the Gap Between Surplus and Scarcity</h1>
          <p className="text-xl mb-8 opacity-90">FoodBridge connects local restaurants and stores with surplus food to NGOs and shelters. Join us in achieving Sustainable Development Goal 2: Zero Hunger.</p>
          <div className="space-x-4">
            <Link to="/register" className="bg-white text-primary font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-100 transition">Get Started Today</Link>
            <Link to="/login" className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-primary transition">Login</Link>
          </div>
        </div>
      </section>

      {/* SDG 2 Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why SDG 2: Zero Hunger?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Every day, tons of perfectly good food is thrown away by restaurants, while millions go to sleep hungry. Goal 2 of the UN Sustainable Development Goals aims to end hunger, achieve food security, and improve nutrition.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              FoodBridge offers a direct solution by creating a localized, real-time network. Donors can instantly post excess inventory, and verified NGOs can claim it to distribute to those in need.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Reduce food waste in urban areas</li>
              <li>Provide reliable meals to shelters</li>
              <li>Promote sustainable community consumption</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-primary">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">How it Works</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Donors Post Food</h4>
                  <p className="text-sm text-gray-500">Restaurants upload details of surplus food and pickup times.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800">NGOs Get Notified</h4>
                  <p className="text-sm text-gray-500">Local shelters see the available food on their dashboard.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Claim and Collect</h4>
                  <p className="text-sm text-gray-500">NGOs claim the listing and pick up the food to distribute.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
