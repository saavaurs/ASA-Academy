import React from "react"
// import Back from "../common/back/Back"
import "./HContact.css"

const HContact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7919.784536037983!2d110.46640284498228!3d-7.021948106663592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c507be50d83%3A0x8b3ed2ccbc3d79c0!2sUniversitas%20Muhammadiyah%20Semarang%20(UNIMUS)!5e0!3m2!1sid!2sid!4v1747739715295!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  return (
    <>
      {/* <Back title='Contact us' /> */}
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>Please provide us with suggestions or feedback for further development.</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Jl. Kedungmundu No.18, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> asacademy@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+62 00191045</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Ketik pesan disini....
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM TIKTOK</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default HContact
