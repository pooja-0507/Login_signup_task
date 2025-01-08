import { useState } from "react";
import Header from "./Header";

const SignupForm = () => {
  const [isPasswordLogin, setIsPasswordLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted Successfully!");
  };    

  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">

         {/* Header */}
         <Header/>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address *"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          {/* Password/OTP Section */}
          <div>
            <div className="flex items-center space-x-2">
              {/* OTP/Password Buttons */}
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  !isPasswordLogin ? "bg-yellow-500 text-black" : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setIsPasswordLogin(false)}
              >
                OTP
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  isPasswordLogin ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setIsPasswordLogin(true)}
              >
                Password
              </button>
            </div>

            <div className="flex items-center mt-2">
              <input
                type={isPasswordLogin ? "password" : "text"}
                id={isPasswordLogin ? "password" : "otp"}
                placeholder={isPasswordLogin ? "Password *" : "OTP *"}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              {!isPasswordLogin && (
                <a href="#" className="ml-2 text-sm text-blue-500 hover:underline">
                  Get OTP?
                </a>
              )}
            </div>
          </div>

          {/* Mailing List Checkbox */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="mailingList"
              className="w-7     h-6 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label htmlFor="mailingList" className="ml-2 text-sm text-gray-600">
              Join Our Mailing List - Get updates on Rollbacks, special pricing, hot new items, gift ideas, and more.
            </label>
          </div>

          {/* Captcha */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="captcha"
              className="w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label htmlFor="captcha" className="ml-2 text-sm text-gray-600">
              I&apos;m not a robot
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-600"
          >
            Register
          </button>
        </form>

        {/* Terms and Conditions */}
        <p className="mt-4 text-xs text-gray-500 text-center">
          By continuing, you agree to Ubuy&apos;s{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms and Conditions
          </a>
        </p>

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

export default SignupForm;
