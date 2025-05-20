import Back from "../common/back/Back"
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