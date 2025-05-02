// Home.jsx
import { motion } from "framer-motion";
import "../assets/styles/portfoilo.css";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function Portfolio() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="portfolio">
        <div className="container">
          <h1 className="portfolio-title">Portfolio</h1>
          <div className="portfolio-row">
            <div className="portfolio-item">
              <div className="portfolio-item_img">
                <img src="/images/2.webp" alt="" />
              </div>
              <div className="portfolio-item_content">
                <h3 className="portfolio-item_title">ZAMONAVIY PEDAGOGIK TENDENSIYALARI</h3>
                <p className="portfolio-item_subtitle">Portfoilo</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-item_img">
                <img src="/images/info-about-img.jpg" alt="" />
              </div>
              <div className="portfolio-item_content">
                <h3 className="portfolio-item_title">ZAMONAVIY PEDAGOGIK TENDENSIYALARI</h3>
                <p className="portfolio-item_subtitle">Portfoilo</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-item_img">
                <img src="/images/2.webp" alt="" />
              </div>
              <div className="portfolio-item_content">
                <h3 className="portfolio-item_title">ZAMONAVIY PEDAGOGIK TENDENSIYALARI</h3>
                <p className="portfolio-item_subtitle">Portfoilo</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-item_img">
                <img src="/images/info-about-img.jpg" alt="" />
              </div>
              <div className="portfolio-item_content">
                <h3 className="portfolio-item_title">ZAMONAVIY PEDAGOGIK TENDENSIYALARI</h3>
                <p className="portfolio-item_subtitle">Portfoilo</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-item_img">
                <img src="/images/2.webp" alt="" />
              </div>
              <div className="portfolio-item_content">
                <h3 className="portfolio-item_title">ZAMONAVIY PEDAGOGIK TENDENSIYALARI</h3>
                <p className="portfolio-item_subtitle">Portfoilo</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-item_img">
                <img src="/images/info-about-img.jpg" alt="" />
              </div>
              <div className="portfolio-item_content">
                <h3 className="portfolio-item_title">ZAMONAVIY PEDAGOGIK TENDENSIYALARI</h3>
                <p className="portfolio-item_subtitle">Portfoilo</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
