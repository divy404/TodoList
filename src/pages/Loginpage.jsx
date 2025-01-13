import React, { useState} from 'react';
import NavbarDemo from '../components/ui/navbar-menu';
import Footer from '../components/ui/footer';
import { useNavigate } from 'react-router-dom';

function Button({ value }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/todo');
  };

  return (
    <button 
      onClick={handleClick}
      className="mt-6 transition-all block py-3 px-4 w-full text-white font-bold rounded cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-400 hover:from-indigo-700 hover:to-purple-500 focus:bg-indigo-900 transform hover:-translate-y-1 hover:shadow-lg">
      {value}
    </button>
  );
}

function Input({ type, id, name, label, placeholder, autofocus, value, onChange }) {
  return (
    <label className="text-gray-500 block mt-3">
      {label}
      <input
        autoFocus={autofocus}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded px-4 py-3 w-full mt-1 bg-white text-gray-900 border border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-100"
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
        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
      <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-800 text-sm mt-2 block">
        Forgot Password?
      </a>
      <a href="/register" className="text-indigo-600 hover:text-indigo-800 text-sm mt-1 block">
        Create an Account
      </a>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-[90vh] w-screen">
      <div className="border-t-8 rounded-sm border-indigo-600 bg-white p-12 shadow-2xl w-96">
        <h1 className="font-bold text-center block text-2xl">Log In</h1>
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
    <div className="min-h-screen flex flex-col overflow-hidden">
      <NavbarDemo />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Loginpage;
