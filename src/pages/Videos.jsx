import { useState, useEffect } from "react";
import "../assets/styles/galeria.css";

function Videos() {
  const [videos, setVideos] = useState([]); // Videolarni saqlash uchun state
  const [loading, setLoading] = useState(true); // Yuklanish holati

  useEffect(() => {
    // API dan ma'lumotlarni olish
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://4e439b85aa8b8540.mokky.dev/videos");
        const data = await response.json();
        setVideos(data); // Videolarni state-ga saqlash
        setLoading(false); // Yuklanish tugadi
      } catch (error) {
        console.error("Videolarni yuklashda xatolik:", error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const convertToEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]; // URL'dan video ID'sini ajratib olish
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (loading) {
    return <p>Videolar yuklanmoqda...</p>;
  }

  return (

   <>
   <div className="container">
   <div>
      
      <div className="video-gallery">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <iframe
              src={convertToEmbedUrl(video.url)}
              title={`Video ${video.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
   </div>
   </>
  );
}

export default Videos;