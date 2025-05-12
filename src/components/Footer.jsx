import { useState, useEffect } from "react";
import "../assets/styles/footer.css";

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const addVisitor = async () => {
      try {
        setLoading(true);
        // Yangi tashrif qo'shish
        await fetch('https://4e439b85aa8b8540.mokky.dev/users-count', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            visitorId: localStorage.getItem('visitorId')
          })
        });

        // Umumiy tashrif buyuruvchilar sonini olish
        const response = await fetch('https://4e439b85aa8b8540.mokky.dev/users-count');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Unique visitorId larni hisoblash
          const uniqueVisitors = new Set(data.map(item => item.visitorId)).size;
          setVisitorCount(uniqueVisitors);
        } else {
          console.error('API dan kutilmagan format:', data);
          setVisitorCount(0);
        }
      } catch (error) {
        console.error('Xatolik:', error);
        setVisitorCount(0);
      } finally {
        setLoading(false);
      }
    };

    // VisitorId tekshirish
    if (!localStorage.getItem('visitorId')) {
      // Yangi foydalanuvchi uchun ID yaratish
      const newVisitorId = `visitor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('visitorId', newVisitorId);
      addVisitor();
    } else {
      // Faqat tashrif buyuruvchilar sonini olish
      fetch('https://4e439b85aa8b8540.mokky.dev/users-count')
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            const uniqueVisitors = new Set(data.map(item => item.visitorId)).size;
            setVisitorCount(uniqueVisitors);
          }
        })
        .catch(error => console.error('Xatolik:', error))
        .finally(() => setLoading(false));
    }
  }, []);

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
            <div className="footer-bottom">
              <div className="footer-stats">
                <p>
                  Sayt tashrif buyuruvchilari: {loading ? 'Yuklanmoqda...' : visitorCount}
                </p>
                <p>© {new Date().getFullYear()} Barcha huquqlar himoyalangan.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
