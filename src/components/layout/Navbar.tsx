import React, { useEffect, useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../../assest/4.png";
import Dropdown from "../../pages/Dropdown";

interface NavbarProps {
  onCartClick: () => void;
  cartItemCount: number;
}

interface User {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartItemCount }) => {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // For responsive menu toggle
  const [searchOpen, setSearchOpen] = useState(false); // For mobile search toggle

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("userData");
        setUser(storedUser ? JSON.parse(storedUser) : null);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        setUser(null);
      }
    };

    loadUser();
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
  };

  const categories = [
    "Laptops",
    "Phones",
    "Speakers",
    "Electronics",
    "Accessories",
  ];

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Navbar Top */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={img1} alt="Logo" className="w-12 sm:w-16" />
            </Link>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden focus:outline-none text-gray-600"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <form className="w-full">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm  rounded-lg"
                    placeholder="Search Category"
                    required
                    style={{ border: "2px solid rgb(82, 82, 162)"}}
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0   text-white"
                    style={{ backgroundColor: "rgb(82, 82, 162)",
                      height:"100%",
                      width:"12%",
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                    
                     }}
                  >
                    <Search/>
                  </button>
                </div>
              </form>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to={user ? "/profile" : "/login"}
                className="flex items-center space-x-1 hover:text-indigo-600"
              >
                <User className="h-5 w-5" />
                <span className="hidden sm:inline">
                  {user ? `Welcome, ${user.name}` : "Login"}
                </span>
              </Link>
              {user && (
                <button
                  onClick={handleLogout}
                  className="hover:text-red-600 hidden sm:block"
                >
                  Logout
                </button>
              )}
              <button
                onClick={onCartClick}
                className="flex items-center space-x-1 hover:text-indigo-600"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Cart ({cartItemCount})</span>
              </button>

              {/* Hamburger Menu for Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-2">
          <form className="w-full">
            <div className="relative">
              <input
                type="search"
                id="mobile-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Category"
                required
                style={{ border: "2px solid rgb(82, 82, 162)"}}
              />
              <button
                type="submit"
                className="absolute  top-0 right-0   text-white "
                style={{ backgroundColor: "rgb(82, 82, 162)",
                  height:"100%",
                  width:"17%",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                
                 }}
              >
                <Search/>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-b">
          <nav className="flex flex-col space-y-2 p-4">
            <Dropdown categories={categories} />
            {categories.map((item) => (
              <Link
                key={item}
                to={`/category/${item.toLowerCase()}`}
                className="block px-4 py-2 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 h-13 text-base items-center">
            <Dropdown categories={categories} />
            {categories.map((item) => (
              <Link
                key={item}
                to={`/category/${item.toLowerCase()}`}
                className="hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 h-full flex items-center"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
