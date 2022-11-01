import React from "react";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    var bodyRect = document.body.getBoundingClientRect();
    let port = document.getElementById("port");
    let abo = document.getElementById("abo");
    let cont = document.getElementById("cont");

    if (bodyRect.y <= 200) {
      port.classList.remove("active");
      abo.classList.remove("active");
      cont.classList.remove("active");
    }

    if ((bodyRect.y <= -333 && bodyRect.y > -1000) || bodyRect.y === -1000) {
      abo.classList.remove("active");
      cont.classList.remove("active");
      port.classList.add("active");
    } else if (
      (bodyRect.y <= -1167 && bodyRect.y > -1800) ||
      bodyRect.y === -1800
    ) {
      port.classList.remove("active");
      cont.classList.remove("active");
      abo.classList.add("active");
    } else if (
      (bodyRect.y <= -2000 && bodyRect.y > -2777) ||
      bodyRect.y === -2700
    ) {
      port.classList.remove("active");
      abo.classList.remove("active");
      cont.classList.add("active");
    }
  });

  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                id="port"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                id="abo"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                id="cont"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
