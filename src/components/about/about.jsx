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
        <div className="hero-image"> {/* Tambahkan div untuk gambar */}
          <img src="/images/about/bunderan.png" alt="Bundaran" />
        </div>
      </section>


      {/* About Content */}
      <section className="about-content">
        <div className="content-wrapper about-content-row">
          <div className="about-join-community">
            <img src="/images/join.avif" alt="Join Komunitas ASA Academy" className="about-community-img" />
          </div>
          <div className="about-community-content">
            <h2 className="about-community-title">
              Explore ASA Academy 
            </h2>
            <p className="about-community-desc">
              ASA Academy adalah platform edukasi yang menghadirkan berbagai pengetahuan seputar pemrograman. Kami menyediakan pengetahuan informatif dan video pembelajaran agar siapa saja bisa belajar dengan mudah, kapan saja, dan di mana saja. Kami percaya bahwa akses terhadap ilmu teknologi harus terbuka untuk semua orang. Oleh karena itu, kami hadir untuk membantu kamu memahami dunia pemrograman.
              ASA Academy adalah platform edukasi yang menghadirkan berbagai pengetahuan seputar pemrograman. Menyediakan pengetahuan informatif dan video pembelajaran agar siapa saja bisa belajar dengan mudah, kapan saja, dan di mana saja.<br /><br />
            </p>
            <a href="https://t.me/asaacademy" target="_blank" rel="noopener noreferrer">
              <button className="about-join-telegram-btn">JOIN TELEGRAM GROUP</button>
            </a>
          </div>
        </div>
      </section>

      

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="/images/about/brain.png" alt="Expert instruction" />
            </div>
            <h4>Melatih Logika</h4>
            <div className="benefit-underline"></div>
            <p>Tingkatkan kemampuan berpikir kritis dan analitis.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="/images/about/yeah.png" alt="Training Courses" />
            </div>
            <h4>Memahami Cara Kerja Teknologi</h4>
            <div className="benefit-underline"></div>
            <p>Pelajari bagaimana teknologi bekerja dari dasar hingga lanjutan.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="/images/about/job.png" alt="Expert instruction" />
            </div>
            <h4>Membuka Peluang Karir</h4>
            <div className="benefit-underline"></div>
            <p>Siapkan dirimu untuk dunia kerja dengan skill digital masa kini.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;