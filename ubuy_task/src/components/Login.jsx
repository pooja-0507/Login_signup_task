import { useState } from "react";
import Header from "./Header";

const LoginForm = () => {
  const [isPasswordLogin, setIsPasswordLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false); 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">

        {/* Header */}
        <Header />

        {/* Form */}
        <form className="mt-4">
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address *"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Password/OTP and Input Together */}
          <div className="flex items-center mb-3">
            {/* Toggle Buttons */}
            <div className="flex">
              <button
                type="button"
                className={`py-1 px-3 font-medium rounded-l-md ${isPasswordLogin? "bg-yellow-500 text-black": "bg-gray-200 text-gray-600"}`}
                onClick={() => setIsPasswordLogin(true)}
              >
                Password
              </button>
              <button
                type="button"
                className={`py-1 px-3 font-medium rounded-r-md ${!isPasswordLogin? "bg-yellow-500 text-white": "bg-gray-200 text-gray-600}`}
                onClick={() => setIsPasswordLogin(false)}
              >
                OTP
              </button>
            </div>

            {/* Input Field */}
            <div className="flex-1 relative ml-3">
              {isPasswordLogin ? (
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"} 
                    id="password"
                    placeholder="Password *"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                  {/* Eye Icon */}
                  <span
                    className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)} 
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              ) : (
                <input
                  type="number"
                  id="otp"
                  placeholder="Enter OTP *"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              )}
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <a href="#" className="text-blue-500 hover:underline">
              Forgot Your Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-yellow-500 text-black font-medium rounded-[0.3rem] hover:bg-yellow-600"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <button
            type="button"
            className="w-full py-2 flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
          >
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
              className="w-5 h-5"
            />
            <img
              src="https://img.icons8.com/ios-filled/24/facebook-new.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            <img
              src="https://img.icons8.com/color/24/apple-logo.png"
              alt="Apple"
              className="w-5 h-5"
            />
            <img
              src="https://img.icons8.com/color/24/paypal.png"
              alt="PayPal"
              className="w-5 h-5"
            />
            <span className="ml-2 text-sm">Login with Social Accounts</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
