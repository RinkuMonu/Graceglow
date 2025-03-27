import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from "../../assest/logo.webp";
import bgImage from "../../assest/footerbg.webp"; // Replace with your background image path

export default function Footer() {
  return (
    <footer className="relative text-gray-300 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#468125] opacity-90"></div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-4 text-white mb-2">
              <img src={img1} alt="" style={{ width: "50%" }} />
            </Link>
            <p className="mb-4">Your one-stop shop for all things tech</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Laptops', 'Phones', 'Speakers', 'Electronics', 'Accessories'].map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase()}`}
                  className="h-full flex items-center"
                >
                  {item}
                </Link>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/refund" className="hover:text-white">Returns & Exchanges</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white">Cookies</Link></li>
            
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Shop No.: 22 SUN N Moon, Vidhyadhar Nagar</li>
              <li>Jaipur, Rajasthan, India</li>
              <li>Phone: +918955630782</li>
              <li>Email: info@graceglows.in</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} GRACEGLOW BEAUTY PRODUCTS PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
