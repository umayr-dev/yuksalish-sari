// import { Link } from "react-router";

function Info() {
  return (
    <>
      <div className="container">
        <div className="more-info">
          <div className="more-info__left">
            <h1>Rag‘batlantirish metodi</h1>
            <span>
              Zamonaviy ta’lim tizimida o‘quvchilarni faollashtirish, ularning
              mustaqil fikrlashini, ijodkorligini va o‘zini baholash
              ko‘nikmalarini rivojlantirish dolzarb masalalardan biridir. Bu
              jarayonda rag‘batlantirish metodining pedagogik ahamiyati alohida
              o‘rin tutadi. Rag‘bat – bu o‘quvchining ijobiy harakatlarini
              e’tirof etish, ularni yanada kuchaytirish va rivojlantirishga
              yo‘naltirilgan ta’sir vositasidir.
            </span>
          </div>
          <div className="more-info__right">
            <div>
              <h3>Rag‘batlantirish metodi</h3>
              <p>
                Rag‘batlantirish metodi – bu o‘quvchilar faoliyatini
                faollashtirish, ta’limga nisbatan ijobiy munosabatni
                shakllantirish va yuqori o‘zlashtirish darajasiga erishish uchun
                pedagog tomonidan qo‘llaniladigan metodlardan biridir. U
                quyidagi shakllarda namoyon bo‘ladi:
              </p>
            </div>
            <div>
              <ul className="list">
                <li>
                  Ma’naviy rag‘bat: maqtov, e’tirof, darsda ishtirokini
                  qadrlash;
                </li>
                <li>
                  Ijtimoiy rag‘bat: jamoa oldida faxrlash, yetakchi sifatida
                  ko‘rsatish;
                </li>
                <li>Moddiy rag‘bat: sovg‘a, sertifikat, baho;</li>
                <li>
                  Individual rag‘bat: shaxsiy qiziqish va ehtiyojlarini hisobga
                  olib beriladigan rag‘batlar.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
          <div className="footer">
            <div className="footer-top">
              <div className="footer-title">
                <h2>Ma`lumot</h2>
                <h2>Sayt haqida</h2>
                <h2>Foto lavxalar</h2>
              </div>
              <div className="footer-description">
                <span>
                Zamonaviy ta’lim tizimida o‘quvchilarni faollashtirish, ularning mustaqil fikrlashini, ijodkorligini va o‘zini baholash ko‘nikmalarini rivojlantirish dolzarb masalalardan biridir. Bu jarayonda rag‘batlantirish metodining pedagogik ahamiyati alohida o‘rin tutadi. Rag‘bat – bu o‘quvchining ijobiy harakatlarini e’tirof etish, ularni yanada kuchaytirish va rivojlantirishga yo‘naltirilgan ta’sir vositasidir.
                </span>
                <span>
                Ushbu sayt pedagogik ta’lim jarayonida rag‘batlantirish metodining o‘rni va ahamiyatini chuqur o‘rganish, bo‘lajak o‘qituvchilarni ushbu metoddan samarali foydalanishga tayyorlash tizimini takomillashtirishga qaratilgan. Sayt orqali ilmiy tadqiqot natijalari, xorijiy tajribalar, o‘quv-metodik materiallar va amaliy tavsiyalar taqdim etiladi.
                </span>
                <div className="footer-images">
                  <img src="/images/img1.jpg" width={180} height={180} alt="" />
                  <img src="/images/img2.jpg" width={10} height={160} alt="" />
                  <img src="/images/img3.jpg" alt="" width={180} height={180}/>
                  <img src="/images/img4.jpg" alt="" width={180} height={180}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Info;
