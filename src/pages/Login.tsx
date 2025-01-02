import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import axios from "axios";
import Swal from 'sweetalert2'

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "https://sevenunique-backend.onrender.com/api/v1/user/login",
        { name, password }
      );
  
      const data = response.data;
  
      if (data && data.success ) {
        // localStorage.setItem("userToken", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user || {}));
        Swal.fire({
          title: "Successful Login",
          icon: "success",
          draggable: true
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Invalid credentials or token not found!",
          icon: "error"
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };
  

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sevenunique-backend.onrender.com/api/v1/user/register",
        { name,gender, phone, password }
      );

      const data = response.data;
      console.log("Registration Successful:", data);
      Swal.fire({
        title: "Successful Registration",
        icon: "success",
        draggable: true
      });
    } catch (error) {
      console.error("Registration Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Invalid credentials!`,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {isLogin ? "Sign in to your account" : "Create new account"}
        </h2>

        <form className="mt-8 space-y-6" onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <><div>
            <label htmlFor="email" className="sr-only">
              Phone No
            </label>
            <div className="relative">
              <Mail className="absolute inset-y-0 left-0 pl-3 h-7 w-7 text-gray-400 pointer-events-none" />
              <input
                id="phone"
                name="phone"
                type="number"
                required
                className="appearance-none rounded-lg block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          
               <div>
               <label htmlFor="gender" className="sr-only">
                 Gender
               </label>
               <div className="relative">
                 <Mail className="absolute inset-y-0 left-0 pl-3 h-5 w-5 text-gray-400 pointer-events-none" />
                 <input
                   id="gender"
                   name="gender"
                   type="text"
                   required
                   className="appearance-none rounded-lg block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   placeholder="gender"
                   value={gender}
                   onChange={(e) => setGender(e.target.value)}
                 />
               </div>
             </div>
             </>
          )}
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute inset-y-0 left-0 pl-3 h-5 w-5 text-gray-400 pointer-events-none" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-lg block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

          
       

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute inset-y-0 left-0 pl-3 h-5 w-5 text-gray-400 pointer-events-none" />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg block w-full pl-10 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="text-sm text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
