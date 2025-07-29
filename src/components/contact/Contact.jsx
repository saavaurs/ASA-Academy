import React, { useState } from "react"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7919.784536037983!2d110.46640284498228!3d-7.021948106663592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c507be50d83%3A0x8b3ed2ccbc3d79c0!2sUniversitas%20Muhammadiyah%20Semarang%20(UNIMUS)!5e0!3m2!1sid!2sid!4v1747739715295!5m2!1sid!2sid'

  const [form, setForm] = useState({
    nama: "",
    email: "",
    subject: "",
    pesan: "",
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("nama", form.nama)
    formData.append("email", form.email)
    formData.append("subject", form.subject)
    formData.append("pesan", form.pesan)

    try {
      const res = await fetch("http://localhost/ASA-Academy/backend/contact.php", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      if (data.status === "success") {
        alert("Pesan berhasil dikirim!")
        setForm({ nama: "", email: "", subject: "", pesan: "" })
      } else {
        alert("Gagal mengirim pesan. " + (data.error || ""))
      }
    } catch (err) {
      alert("Gagal mengirim pesan. " + err.message)
    }
  }

  return (
    <section className='contacts padding'>
      <div className='container shadow flexSB'>
        <div className='left row'>
          <iframe src={map}></iframe>
        </div>
        <div className='right row'>
          <h1>Contact us</h1>
          <p>Please provide us with suggestions or feedback for further development.</p>

          <div className='items grid2'>
  <div>
    <h4>ADDRESS:</h4>
    <p>Jl. Kedungmundu No.18, Kedungmundu, Kec. Tembalang, Kota Semarang, Jawa Tengah 50273</p>
  </div>
  <div>
    <h4>EMAIL:</h4>
    <p>asacademy@gmail.com</p>
  </div>
  <div>
    <h4>PHONE:</h4>
    <p>+62 00191045</p>
  </div>
</div>

          <form onSubmit={handleSubmit}>
            <div className='flexSB'>
              <input type='text' name='nama' placeholder='Name' value={form.nama} onChange={handleChange} required />
              <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} required />
            </div>
            <input type='text' name='subject' placeholder='Subject' value={form.subject} onChange={handleChange} required />
            <textarea name='pesan' cols='30' rows='10' placeholder='Ketik pesan disini....' value={form.pesan} onChange={handleChange} required />
            <button className='primary-btn' type="submit">SEND MESSAGE</button>
          </form>

          <h3>Follow us here</h3>
          <span>FACEBOOK TWITTER INSTAGRAM TIKTOK</span>
        </div>
      </div>
    </section>
  )
}

export default Contact