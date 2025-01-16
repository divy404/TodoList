import React, { useState } from "react";
import { Layout } from '../components/Layout';
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import NavbarDemo from "../components/ui/navbar-menu";
import { Footer } from "../components/ui/footer";

function Contactpage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <NavbarDemo />
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0">
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center text-white mb-12">Contact Us</h1>
            <h2 className="text-2xl font-semibold mb-4 text-white text-center">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-400 text-center">Message sent successfully!</p>
            )}
          </div>
        </main>
       <Footer />
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default Contactpage;




