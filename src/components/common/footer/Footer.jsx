import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="footer-container">
        <div className="footer-col logo-col">
          {/* <img src="/images/logo navbar.png" alt="ASA Academy Logo" className="footer-logo" /> */}
          <div className="footer-title">Online Education & Learning</div>
          <div className="footer-desc">
            Di ASA Academy, coding adalah seni yang membangun masa depan. Error bukan hambatan, tapi proses belajar. Semua bisa ngoding, asal mau belajar dan terus berkembang!
          </div>
        </div>
        <div className="footer-col topic-col">
          <div className="footer-heading">TOPIC</div>
          <ul>
             <li><Link to="/courses">Data Analyst</Link></li>
            <li><Link to="/courses">UI/UX Design</Link></li>
            <li><Link to="/courses">FrontEnd Development</Link></li>
            <li><Link to="/courses">BackEnd Development</Link></li>
            <li><Link to="/courses">Mobile Development</Link></li>
            <li><Link to="/courses">Artificial Intelligence</Link></li>
          </ul>
        </div>
        <div className="footer-col info-col">
          <div className="footer-heading">INFORMATION</div>
          <ul>
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/about">Tentang</Link></li>
            <li><Link to="/courses">Materi</Link></li>
            <li><Link to="/team">Tim</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/journal">Blog</Link></li>
            <li><Link to="/contact">Kontak</Link></li>
            
            
          </ul>
        </div>
        <div className="footer-col more-col">
          <div className="footer-heading">MORE ABOUT US</div>
          <div className="footer-email">@asaacademy.gmail.com</div>
          <div className="footer-socials">
            <a href="#"><img src="/images/footer/ig.png" alt="Instagram" /></a>
            <a href="#"><img src="/images/footer/email.png" alt="Email" /></a>
            <a href="#"><img src="/images/footer/wa.png" alt="WhatsApp" /></a>
            <a href="#"><img src="/images/footer/linkedin.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright ©2025 All rights reserved | Made by ASA
      </div>
    </footer>
  )
}

export default Footer
