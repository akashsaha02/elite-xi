import footerLogo from "../../assets/logo-footer.png";
import Newsletter from "../Newsletter/Newsletter";
import { useState } from 'react';
import { toast } from 'react-toastify';

const Footer = () => {

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && emailRegex.test(email)) {
      toast.success(`Subscribed successfully with email: ${email}`, {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 pt-56 md:pt-44 lg:pt-52 mt-52 lg:mt-52 px-4 relative">
      {/* Centered Newsletter Card */}
      <div className="container mx-auto px-5 absolute top-[-15%] lg:top-[-25%] left-1/2 transform -translate-x-1/2">
        <div className="w-full">
          <Newsletter />
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="flex flex-col justify-center items-center mb-10">
          <img src={footerLogo} alt="Logo" className="max-w-40 mb-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About Us</h3>
            <p className="text-gray-400">
              Build your dream cricket team with us. Our platform lets fans create, manage, and compete with custom teams, bringing you closer to the game you love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Fixture</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Team</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Schedules</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 rounded-lg border border-gray-600 bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSubscribe}
                className="bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 from-pink-400 to-orange-400 px-4 py-2 rounded-lg font-semibold text-black transition-colors mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <hr className="border-gray-500" />
          <p className="mt-4">&copy; 2024 Akash Saha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;