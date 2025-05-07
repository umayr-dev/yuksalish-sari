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
              Jumakulova Mavludaxon Xosilovna o‘z mehnat faoliyatini Andijon shahar 6-umumta’lim maktabida o‘qituvchi lavozimida boshlagan. Hozirda Jumakulova Mavludaxon Xosilovna Andijon davlat pedagogika instituti Pedagogika fakulteti Boshlang‘ich ta’lim kafedrasida faoliyat yuritib, yosh avlodga ta’lim va tarbiya berish ishlarini amalga oshirib kelmoqda.
Pedagogik faoliyati davomida Jumakulova Mavludaxon Xosilovna tomonidan 1 ta o‘quv qo‘llanma hamda 20 dan ortiq ilmiy maqolalar chop etilgan. 2019-yilda Jumakulova Mavludaxon Xosilovna O‘zbekiston Respublikasi Xalq ta’limi vazirligi tomonidan “Xalq ta’limi a’lochisi” nishoni bilan taqdirlangan. 
2023-yildan boshlab Andijon davlat universiteti tayanch doktoranti sifatida ilmiy izlanishlarini boshlagan. Uning ilmiy tadqiqotlari o‘quvchilarni ta’lim jarayoniga faol jalb etish masalalariga qaratilgan bo‘lib, ayniqsa rag‘batlantirish metodining samaradorligini o‘rganish asosiy yo‘nalishlaridan biridir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
