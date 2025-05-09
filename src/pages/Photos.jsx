import { useState } from 'react';
import "../assets/styles/photos.css";

function Photos() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: "/images/ph1.jpg",
    },
    {
      id: 2,
      url: "/images/ph2.jpg",
    },
    {
      id: 3,
      url: "/images/ph3.jpg",
    },{
      id: 4,
      url: "/images/ph4.jpg",
    }
    // Add more images as needed
  ];

  return (
    <>
      <div className="container">
        <div className="photos">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="photo-item"
              onClick={() => setSelectedImage(image.url)}
            >
              <img src={image.url} alt={`Photo ${image.id}`} />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <span className="close">&times;</span>
            <img src={selectedImage} alt="Selected" className="modal-content" />
          </div>
        )}
      </div>
    </>
  );
}

export default Photos;