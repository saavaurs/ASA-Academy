import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="breadcrumb">
        </div>
      </div>

      <div className="about-content">
      <h2>Langkah Awal Menuju Keahlian, 
      Bersama Platform Edukasi Tepercaya</h2>
        <div className="about-description">
          <p className="intro-text">
            Temukan berbagai pengetahuan dasar pemrograman di sini. Pelajari dengan mudah melalui berbagai topik mendalam 
            dengan video pembelajaran dan materi berupa artikel. Ayo tingkatkan skill-mu dan mulai perjalanan belajarmu hari ini!
          </p>
          </div>

        
            <div className ="about-text">
            <h2>Belajar Pemrograman dengan Mudah dan Menyenangkan</h2>
            ASA Academy adalah platform edukasi yang menghadirkan berbagai pengetahuan seputar pemrograman. 
            Kami menyediakan pengetahuan informatif dan video pembelajaran agar siapa saja bisa belajar dengan mudah, 
            kapan saja, dan di mana saja.
          


          <p>
            Kami percaya bahwa akses terhadap ilmu teknologi harus terbuka untuk 
            semua orang. Oleh karena itu, kami hadir untuk membantu kamu memahami dunia pemrograman.
          </p>
        </div>

        <div className="benefits-section">
          <h3>Manfaat Belajar di ASA Academy</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Meningkatkan Logika & Berpikir Kritis</h4>
            </div>
            <div className="benefit-card">
              <h4>Memahami Cara Kerja Teknologi</h4>
            </div>
            <div className="benefit-card">
              <h4>Membuka Peluang Karir di Dunia Digital</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;