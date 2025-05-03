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
              <Link to={"/portfolio"} className="banner-text_btn">
                Batafsil
              </Link>
            </div>
            <div className="banner-img">
              <img
                className="banner-img_img"
                src="/images/banner-img.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="info">
        <div className="container">
          <div className="info-row">
            <div className="info-about">
              <div className="info-about_img">
                <img src="/images/info-about-img.jpg" alt="" />
              </div>
              <div className="info-about_text">
                <p className="info-about_text_title">
                  Tadqiqotchi:
                  <br />
                  <b>Jumakulova Mavludaxon Xosilovna</b>
                </p>
                <p className="info-about_text_subtitle">
                  Andijon davlat pedagogika instituti Boshlang‘ich ta’lim
                  metodikasi kafedrasi о‘qituvchisi
                </p>
                <Link className="info-about_text_btn" to={'/about'}>Batafsil</Link>

              </div>
            </div>
            <div className="info-img">
              <img src="/images/5.webp" alt="" />
            </div>
            <div className="info-text">
              <h3 className="info-text_title">
                Ta’lim jarayonida rag‘batlantirish metodidan foydalanish{" "}
              </h3>
              <p className="info-text_subtitle">
                O‘quvchilarning o‘quv mashg‘ulotlarida faol ishtirokini,
                kognitiv faoliyatini rivojlantirish, maqsadli harakatlarni
                amalga oshirish, ijodiy tafakkurni rivojlantirish, individual
                ehtiyojlarini qondirish, muvaffaqiyatlarini davomli bo‘lishini
                ta’minlaydi.
              </p>
              <button className="info-text_btn">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about-row">
            <h2 className="about-title">
              Tadqiqot maqsadi. Bo'lajak o'qituvchilarni rag'batlantirishning
              tashkiliy va didaktik tizimidan foydalanishga tayyorlashning
              pedagogik mexanizmlarini takomillashtirishdan iborat.
            </h2>
            <div className="about-content">
              <div className="about-content_img">
                <img src="/images/2.webp" alt="" />
              </div>
              <div className="about-content_text">
                <p>
                  Tadqiqotning vazifalari: Bo‘lajak o‘qituvchilarni
                  rag‘batlantirish metodidan foydalanishga tayyorlash tizimini
                  takomillashtirishning pedagogik shart-sharoitlarini aniqlash;
                  Rag‘batlanritish metodidan foydalanish yuzasidan xorijiy
                  tajribalar talili; Ona tili va o‘qish savodxonligi fanlari
                  doirasida rag‘batlantirish metodining mavjud holatini tahlil
                  qilish va bu metodning o‘quv-metodik ta’minoti orqali ta’lim
                  jarayonini takomillashtirish usullarini ishlab chiqish;
                  Bo‘lajak o‘qituvchilarni rag‘batlantirish metodidan
                  foydalanishga tayyorlash tizimi va mexanizmini
                  takomillashtirish, ta’lim jarayonida rag‘batlantirish
                  metodining samarali modelini ishlab chiqish va uning pedagogik
                  amaliyotga joriy etilishining samaradorligini o‘rganish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="yuksalish-sari">
        <div className="container">
          
        </div>
      </section>
    </motion.div>
  );
}
