import './GalleryPage.css';

import photo1 from '../assets/gallery/photo1.png';
import photo2 from '../assets/gallery/photo2.png';
import photo3 from '../assets/gallery/photo3.png';
import photo4 from '../assets/gallery/photo4.png';
import photo5 from '../assets/gallery/photo5.png';
import photo6 from '../assets/gallery/photo6.png';
import photo7 from '../assets/gallery/photo7.png';
import photo8 from '../assets/gallery/photo8.png';
import photo9 from '../assets/gallery/photo9.png';
import photo10 from '../assets/gallery/photo10.png';

const images = [
  photo1, photo2, photo3, photo4, photo5,
  photo6, photo7, photo8, photo9, photo10
];

function GalleryPage() {
  return (
    <div className="gallery-page">
       <section className="gallery-header">
    <h2>
      <span className="gallery-label">Photo</span><br />
      <strong>Gallery</strong>
    </h2>
  </section>

      <section className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`Gallery ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="gallery-pagination">
        <span className="page-number">0</span>
        <span className="divider">|</span>
        <span className="total-pages">05</span>
        <button className="arrow-btn" disabled>←</button>
        <button className="arrow-btn">→</button>
      </section>
    </div>
  );
}

export default GalleryPage;
