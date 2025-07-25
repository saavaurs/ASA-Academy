// src/components/admin/pages/AdminHome.jsx
import React, { useEffect, useState } from "react"
import axios from "axios"

const API_BASE = "http://localhost/ASA-Academy/backend"

const AdminHome = () => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    axios.get(`${API_BASE}/getBlog.php`).then(res => setTotal(res.data.length))
  }, [])

  return (
    <div className="admin-home">
      <div className="welcome-card">
        <h1>Selamat Datang, Admin!</h1>
        <p>Kelola konten blog dan pesan contact us dengan mudah</p>
      </div>

      <div className="stat-card">
        <div className="stat-left">
          <h3>Artikel Blog</h3>
          <h1>{total}</h1>
          <p>Total artikel yang telah dipublikasikan</p>

          <div className="cta">
            <a className="btn primary" href="/admin/blog">Kelola Blog</a>
          </div>
        </div>

        <div className="stat-right">
          <span role="img" aria-label="doc" className="big-icon">📄</span>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
