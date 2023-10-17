import React, { useEffect, useState } from "react";
import Avatar from "./Component/Avatart/Avatar";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";

function App() {


  return (
    <div className="container">
      <Header />
      <Avatar />
      <div className="divider"></div>
      <Main />
      <div className="divider"></div>
      <Contact />
      <div className="divider"></div>
      <Footer />
      {showScrollTop && (
        <button className="scrollTop" onClick={scrollToTop}>
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;