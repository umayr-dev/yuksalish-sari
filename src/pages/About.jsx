// Home.jsx
import { motion } from "framer-motion";
import "../assets/styles/about.css";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="profile">
        <div className="container">
          <div className="profile-row">
            <div className="profile-img">
              <img src="/images/info-about-img.jpg" alt="" />
            </div>
            <div className="profile-content">
              <h1 className="profile-content_title">Jumakulova Mavludaxon Xosilovna</h1>
              <p className="profile-content_subtitle">
                {/* Iminova Xurshida Muxtorovna 2021-yildan buyon Andijon davlat
                pedagogika instituti Pedagogika fakulteti Boshlang’ich ta’lim
                metodikasi kafedrasida katta o’qituvchi vazifasida ishlab,
                matematika fanidan kelajak yoshlariga bilim berib kelmoqda U o’z
                faoliyati davomida 2 ta darslik, 3 ta o’quv qo’llanma, 30 dan
                ortiq ilmiy maqolalar chop ettirgan. Bundan tashqari, ko’plab
                tanlovlardagi faol ishtiroki bilan ham ajralib turadi. 2022-yil
                MDH davlatlari miqyosida o’tkazilgan “Tashabbuskor islohotchi”
                ko’rik-tanlovida faol ishtirok etib “Tashabbuskor islohotchi”
                ko’krak nishoni hamda esdalik sovg’alarini qo’lga kiritganligi
                ham shular jumlasidandir. Andijon davlat pedagogika institutida
                amalga oshirilayotgan “Yangi avlod darsliklari asosida bo’lajak
                boshlang’ich sinf o’qituvchilarini tayyorlash metodikasini
                takomillashtirish” nomli loyiha a’zosi. Ushbu loyiha doirasida
                yangi avlod darsliklari yuzasidan bir qancha metodik ishlanmalar
                muallifi. U loyiha doirasida Andijon viloyatidagi 30-umumta’lim
                maktabi bilan hamkorlikda samarali metodik faoliyat olib
                bormoqda. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
