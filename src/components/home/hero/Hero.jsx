import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ASA ACADEMY' title='Materi pilihan terbaik dari yang terbaik' />
            <p>Disini menyediakan materi-materi tentang pemrograman dari yang dasar sampai menjadi profesional</p>
            <div className='button'>
              <button className='primary-btn'>
                MULAI SEKARANG! <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                LIHAT MATERI <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
