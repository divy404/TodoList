import React from "react";
import NavbarDemo from "../components/ui/navbar-menu";
import { Footer } from "../components/ui/footer";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

export function Aboutpage() {
  console.log("Rendering Aboutpage");
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarDemo />
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0">
        <div className="relative z-10 flex-grow py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 text-white overflow-y-auto">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:space-x-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  About ToDo
                </h1>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Welcome to <span className="font-semibold text-indigo-300">ToDo</span>, your ultimate task management solution. We're dedicated to helping you stay organized and boost your productivity with our intuitive and feature-rich todo list application.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                
                  <div className="bg-neutral-900/70 shadow-lg rounded-lg p-4 flex-1 border-2 border-transparent bg-clip-border border-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-transparent bg-clip-text">
                      Why Choose ToDo?
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base">
                      ToDo stands out with its beautiful dark theme, smooth animations, and user-friendly interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <div className="bg-neutral-900/70 shadow-lg rounded-lg p-4 max-w-lg mx-auto border-2 border-transparent bg-clip-border border-gradient-to-r from-pink-400 via-red-400 to-yellow-400">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-center bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-transparent bg-clip-text">
                  Key Features
                </h2>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm md:text-base">
                  <li>Due date tracking to keep you on top of deadlines</li>
                  <li>Task categorization and filtering for easy organization</li>
                  <li>Progress tracking to visualize your achievements</li>
                  <li>Dark mode for comfortable viewing at all times</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BackgroundBeamsWithCollision>
    </div>
  );
}


