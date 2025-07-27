import React, { useEffect, useState } from "react"

const AdminContact = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch("http://localhost/ASA-Academy/backend/contact.php")
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error("Gagal memuat data kontak:", err))
  }, [])

  return (
    <div className="admin-contact" style={{ padding: "20px" }}>
      <h2>Pesan Masuk</h2>
      {messages.length === 0 ? (
        <p>Belum ada pesan.</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f4f4f4" }}>
              <th>Nama</th>
              <th>Email</th>
              <th>Subjek</th>
              <th>Pesan</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr key={index}>
                <td>{msg.nama}</td>
                <td>{msg.email}</td>
                <td>{msg.subject}</td>
                <td>{msg.pesan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AdminContact
