import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import PortSection from "./PortSection";
import Contact from "./Contact";
import Footer from "./Footer";
import Model from "./Model";

function navbarshrink() {
  const navbarCollapsible = document.body.querySelector("#mainNav");
  if (!navbarCollapsible) {
    return;
  }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove("navbar-shrink");
  } else {
    navbarCollapsible.classList.add("navbar-shrink");
  }
}
const App = () => {
  window.addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener("scroll", navbarshrink);
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );

    responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });
  return (
    <div>
      <Navbar />
      <Header />
      <PortSection />
      <About />
      <Contact />
      <Footer />
      <Model />
    </div>
  );
};

export default App;
