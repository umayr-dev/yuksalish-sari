// Home.jsx
import { motion } from "framer-motion";
import "../assets/styles/homepage.css";
import { Link } from "react-router";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <section className="banner">
        <div className="container">
          <div className="banner-row">
            <div className="banner-text">
              <h1 className="banner-text_title">Rag‘batlantirish metodi</h1>
              <p className="banner-text_subtitle">
                Pedagogik-psixologik ta’sir usuli bo‘lib, o‘quvchilar
                muvaffaqiyatini qo‘llab-quvvatlash, kuchli tomonlarini e’tirof
                etish, faoliyatiga turtki berish orqali rejalashtirilgan ta’lim
                natijasiga erishish yo‘lidir.
              </p>
              <Link to={'/'} className="banner-text_btn">Batafsil</Link>
            </div>
            <div className="banner-img">
              <img className="banner-img_img" src="/images/banner-img.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
