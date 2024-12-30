import React from "react";
import NavbarDemo from "../components/ui/navbar-menu";
import { Footer } from "../components/ui/footer";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

export function Aboutpage() {
  console.log("Rendering Aboutpage");
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <NavbarDemo />
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0">
        <div className="relative z-10 flex-grow overflow-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
          <div className="w-full max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  About ToDo
                </h1>
                <p className="text-base leading-relaxed">
                  Welcome to <span className="font-semibold text-indigo-300">ToDo</span>, your ultimate task management solution. We're dedicated to helping you stay organized and boost your productivity with our intuitive and feature-rich todo list application.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="flex space-x-4">
                  <div className="bg-neutral-900/70 shadow-lg rounded-lg p-4 flex-1">
                    <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 text-transparent bg-clip-text">
                      Our Mission
                    </h2>
                    <p className="text-sm">
                      Our mission is to simplify task management and help individuals and teams achieve their goals through effective organization and productivity tools.
                    </p>
                  </div>
                  <div className="bg-neutral-900/70 shadow-lg rounded-lg p-4 flex-1">
                    <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text">
                      Why Choose ToDo?
                    </h2>
                    <p className="text-sm">
                      ToDo stands out with its beautiful dark theme, smooth animations, and user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-neutral-900/70 shadow-lg rounded-lg p-4 max-w-lg mx-auto">
                <h2 className="text-xl font-semibold mb-3 text-center bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-transparent bg-clip-text">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Intuitive task management with drag-and-drop functionality</li>
                  <li>Due date tracking to keep you on top of deadlines</li>
                  <li>Task categorization and filtering for easy organization</li>
                  <li>Progress tracking to visualize your achievements</li>
                  <li>Dark mode for comfortable viewing at all times</li>
                  <li>Responsive design for a seamless experience on any device</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <Footer />
    </div>
  );
}
