import "./faq.css"

import React, { useState } from "react"

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqData = [
    {
      question: "Apa itu ASA Academy?",
      answer: "ASA Academy adalah platform belajar online yang menyediakan berbagai materi teknologi terkini."
    },
    {
      question: "Apakah materi di website ini cocok untuk pemula?",
      answer: "Ya, semua materi dirancang untuk pemula hingga mahir, dengan penjelasan yang mudah dipahami."
    },
    {
      question: "Apakah ada biaya yang dikenakan untuk mengakses seluruh konten?",
      answer: "Tidak, semua konten dapat diakses secara gratis tanpa biaya apapun."
    },
    {
      question: "Bagaimana jika saya mengalami kendala saat mengakses materi?",
      answer: "Anda bisa menghubungi tim kami melalui formulir kontak di halaman 'Hubungi Kami' atau kirim email ke support@asaacademy.com. Kami siap membantu Anda."
    },
    {
      question: "Apakah ada grup diskusi atau komunitas belajar?",
      answer: " Ya. Kami memiliki grup Telegram/Discord resmi untuk diskusi, berbagi info, dan belajar bersama dengan pengguna lainnya."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className='faq'>
      <div className='container'>
        <h1 className='faq-title'>Frequently Asked Questions</h1>
        
        <div className='faq-list'>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className='faq-question'>
                {item.question}
              </div>
              {activeIndex === index && (
                <div className='faq-answer'>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq