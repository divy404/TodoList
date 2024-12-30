// src/components/Layout.jsx
import React from "react";
import { NavbarDemo } from "./ui/navbar-menu";
import { Footer } from "./ui/footer";

export function Layout({ children }) {
  return (
    <div className="relative">
      {/* Navbar */}
      <NavbarDemo />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
