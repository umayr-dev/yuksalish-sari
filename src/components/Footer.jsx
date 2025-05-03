import "../assets/styles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div className="footer-top">
              <div className="footer-title">
                <h2>Ma`lumot</h2>
                <h2>Sayt haqida</h2>
                <h2>Foto lavxalar</h2>
              </div>
              <div className="footer-description">
                <span>
                  Ta’lim jarayonida rag‘batlantirish metodidan foydalanish
                  o‘quvchilarning o‘quv mashg‘ulotlarida faol ishtirokini,
                  kognitiv faoliyatini rivojlantirish, maqsadli harakatlarni
                  amalga oshirish, ijodiy tafakkurni rivojlantirish, individual
                  ehtiyojlarini qondirish, muvaffaqiyatlarini davomli bo‘lishini
                  ta’minlaydi.
                  <br />
                  <br />
                  Bo‘lajak pedagoglar rag‘batlantirish usullarini (ma’naviy,
                  ijtimoiy, individual, jamoaviy shakllarda) to‘g‘ri qo‘llay
                  olsalar, bu nafaqat o‘quvchilarning hozirgi o‘zlashtirish
                  darajasini, balki ularning kelajakdagi mustaqil fikrlash,
                  muammolarni hal qilish va o‘zini baholash kabi ko‘nikmalarini
                  ham shakllantirishga xizmat qiladi
                </span>
                <span>
                  Bo‘lajak o‘qituvchilarni rag‘batlantirish metodidan
                  foydalanishga tayyorlash tizimini takomillashtirishning
                  pedagogik shart-sharoitlarini aniqlash; Rag‘batlanritish
                  metodidan foydalanish yuzasidan xorijiy tajribalar talili; Ona
                  tili va o‘qish savodxonligi fanlari doirasida rag‘batlantirish
                  metodining mavjud holatini tahlil qilish va bu metodning
                  o‘quv-metodik ta’minoti orqali ta’lim jarayonini
                  takomillashtirish usullarini ishlab chiqish; Bo‘lajak
                  o‘qituvchilarni rag‘batlantirish metodidan foydalanishga
                  tayyorlash tizimi va mexanizmini takomillashtirish, ta’lim
                  jarayonida rag‘batlantirish metodining samarali modelini
                  ishlab chiqish va uning pedagogik amaliyotga joriy
                  etilishining samaradorligini o‘rganish.
                  <br />
                  <br />
                  Rag‘batlantirish metodi
                </span>
                <div className="footer-images">
                  <img src="/images/img1.jpg" width={180} height={180} alt="" />
                  <img src="/images/img2.jpg" width={10} height={160} alt="" />
                  <img src="/images/img3.jpg" alt="" width={180} height={180}/>
                  <img src="/images/img4.jpg" alt="" width={180} height={180}/>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {2025} Barcha huquqlar himoyalangan..</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
