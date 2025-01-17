import React, { useState } from 'react';
import NavbarDemo from '../components/ui/navbar-menu';
import Footer from '../components/ui/footer';
import { useNavigate } from 'react-router-dom';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

function Button({ value }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/todo');
  };

  return (
    <button 
      onClick={handleClick}
      className="mt-6 transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black focus:bg-black transform hover:-translate-y-1 hover:shadow-lg">
      {value}
    </button>
  );
}

function Input({ type, id, name, label, placeholder, autofocus, value, onChange }) {
  return (
    <label className="text-gray-300 block mt-3">
      {label}
      <input
        autoFocus={autofocus}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded px-4 py-3 w-full mt-1 bg-gray-800 text-white border border-gray-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
      />
    </label>
  );
}

function PasswordInput({ label, placeholder }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-3 relative">
      <Input
        type={showPassword ? "text" : "password"}
        id="password"
        name="password"
        label={label}
        placeholder={placeholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-3 flex items-center text-gray-500">
        {showPassword ? "Hide" : "Show"}
      </button>
      <a href="/forgot-password" className="text-indigo-400 hover:text-indigo-600 text-sm mt-2 block">
        Forgot Password?
      </a>
      <a href="/register" className="text-indigo-400 hover:text-indigo-600 text-sm mt-1 block">
        Create an Account
      </a>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="flex justify-center items-center min-h-[90vh] w-screen">
      <div className="rounded-lg p-12 shadow-[0_35px_100px_0_rgba(0,0,0,0.8)] w-96 mx-4">
        <h1 className="font-bold text-center block text-2xl text-white">Log In</h1>
        <form>
          <Input type="email" id="email" name="email" label="Email Address" placeholder="Enter your email..." autofocus={true} />
          <PasswordInput label="Password" placeholder="••••••••••" />
          <Button value="Submit" />
        </form>
      </div>
    </div>
  );
}

function Loginpage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-auto">
      <NavbarDemo />
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0">
        <LoginForm />
      </BackgroundBeamsWithCollision>
      <Footer />
    </div>
  );
}

export default Loginpage;


