import React, { useEffect, useState } from "react";
import Avatar from "./Component/Avatart/Avatar";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/footer";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

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
      {showScrollTop ?
        <button className="scrollTop" onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" /></svg>
        </button>
        : ''}
    </div>
  );
}

export default App;