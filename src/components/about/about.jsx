import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
     
        

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Langkah Awal Menuju Keahlian,<br />Bersama <span className="highlight">Platform Edukasi Tepercaya</span></h2>
          <p>
            Temukan berbagai pengetahuan dasar pemrograman di sini. pelajari dengan mudah melalui berbagai topik mendalam 
            dengan melalui video pembelajaran dan materi berupa artikel. Ayo tingkatkan skill-mu dan mulai perjalanan belajarmu hari ini!
          </p>
          <button className="explore-button">Explore Now</button>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Belajar Pemrograman dengan Mudah <br /> dan Menyenangkan</h2>
            <p>
              ASA Academy adalah platform edukasi yang menghadirkan berbagai pengetahuan seputar pemrograman.<br />
              Kami menyediakan pengetahuan informatif dan video pembelajaran agar siapa saja bisa belajar dengan mudah,<br /> 
              kapan saja, dan di mana saja. Kami percaya bahwa akses terhadap ilmu teknologi harus terbuka untuk <br /> 
              semua orang. Oleh karena itu, kami hadir untuk membantu kamu memahami dunia pemrograman.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
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
      </section>
    </div>
  );
};

export default About;