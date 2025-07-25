import React from 'react';
import health from '../assets/health.png';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

          const handleLogin = (e) => {
            e.preventDefault();

            // Redirect to dashboard
            navigate('doctor/dashboard');
  };
  return (
    <div className="flex h-screen justify-center items-center bg-[rgba(241,243,248,0.9)]">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center bg-blue-600 text-white p-8 h-full w-full md:w-1/2">
      <img src={health} alt="City Care Logo" className="w-35 h-35 mb-55"  />
        <h1 className="text-4xl mt-5 text-center">
          Hello,<br />Welcome!
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center p-8 bg-white h-full w-full md:w-1/2">
        <h2 className="mb-8 text-4xl font-semibold mt-5">Welcome User!</h2>

        <form className="w-full max-w-sm" onSubmit={handleLogin}>
          {/* Username */}
          <div className="relative bg-gray-100 flex items-center mb-5 px-4 py-2 gap-5">
            <i className="bi bi-person-fill absolute left-3 text-black text-lg"></i>
            <input
              type="text"
              placeholder="User name"
              className="bg-transparent outline-none w-full h-[70px] text-gray-600 pl-6"
            />
          </div>

          {/* Password */}
          <div className="relative bg-gray-100 flex items-center mb-5 mt-2 px-8 py-2 gap-5">
            <i className="bi bi-lock-fill absolute left-3 text-black text-lg"></i>
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full h-[70px] text-gray-600 pl-6"
            />
          </div>

          {/* Forgot Password */}
          <a
            href="#"
            className="block text-right text-blue-600 text-lg mb-6 hover:underline"
          >
            Forgot password?
          </a>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full max-w-[100px] py-2 px-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 mx-auto block"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-lg text-center mt-6">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Register
            </a>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1.5px] bg-gray-800 mt-16 rotate-[-.5deg]" />
        </form>
      </div>
    </div>
  );
}

export default Login;
