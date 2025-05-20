import React from "react"
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
            <li>Data Analyst</li>
            <li>UI/UX Design</li>
            <li>Cyber Security</li>
            <li>Fullstack Development</li>
            <li>Mobile Development</li>
            <li>Machine Learning</li>
          </ul>
        </div>
        <div className="footer-col info-col">
          <div className="footer-heading">INFORMATION</div>
          <ul>
            <li>Home</li>
            <li>Tentang</li>
            <li>Topik</li>
            <li>Kontak</li>
            <li>Jurnal</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-col more-col">
          <div className="footer-heading">MORE ABOUT US</div>
          <div className="footer-email">@asaacademy.gmail.com</div>
          <div className="footer-socials">
            <a href="#"><img src="/images/ig.svg" alt="Instagram" /></a>
            <a href="#"><img src="/images/mail.svg" alt="Email" /></a>
            <a href="#"><img src="/images/wa.svg" alt="WhatsApp" /></a>
            <a href="#"><img src="/images/linkedin.svg" alt="LinkedIn" /></a>
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
