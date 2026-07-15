import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-950 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to<br />
            <span className="text-blue-400">Mangalore Public Pool</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Your perfect destination for swimming, fitness & fun in Mangalore
          </p>
          
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold px-10 py-4 rounded-xl transition-all"
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
          >
            Book Your Slot Now
          </button>
        </div>
      </div>

      {/* Quick Booking Widget */}
      <div className="max-w-4xl mx-auto -mt-10 px-4 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Quick Booking</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Date</label>
              <input type="date" className="w-full border rounded-lg px-4 py-3" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Time Slot</label>
              <select className="w-full border rounded-lg px-4 py-3">
                <option>Morning (6:00 AM - 9:00 AM)</option>
                <option>Afternoon (2:00 PM - 5:00 PM)</option>
                <option>Evening (5:30 PM - 8:00 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">People</label>
              <select className="w-full border rounded-lg px-4 py-3">
                <option>1 Person</option>
                <option>2 People</option>
                <option>3+ People</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
            <p className="text-gray-600">Open 7 days a week from 6 AM to 8 PM</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trained Lifeguards</h3>
            <p className="text-gray-600">Safety first - Professional lifeguards on duty</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-600">Easy access in Mangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;