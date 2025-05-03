import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import './index.css'
import { useState, useEffect } from "react";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Main />
      <Footer />

      {/* Scroll to top button */}
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={"white"}
   
  >
    <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
  </svg>
        </button>
      )}
    </>
  );
}

export default App;
