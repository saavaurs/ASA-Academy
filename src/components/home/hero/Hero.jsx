import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useNavigate } from "react-router-dom" // Tambahkan ini

const Hero = () => {
  const navigate = useNavigate() // Tambahkan ini

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ASA ACADEMY' title='Materi pilihan terbaik dari yang terbaik' />
            <p>Disini menyediakan materi-materi tentang pemrograman dari yang dasar sampai menjadi profesional</p>
            <div className='button'>
              <button onClick={() => navigate("/courses")}>Lihat Materi</button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
