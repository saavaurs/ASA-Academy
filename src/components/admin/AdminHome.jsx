// src/components/admin/pages/AdminHome.jsx
import React, { useEffect, useState } from "react"
import axios from "axios"

const API_BASE = "http://localhost/ASA-Academy/backend"

const AdminHome = () => {
  const [total, setTotal] = useState(0)
  const [contactCount, setContactCount] = useState(0)

  useEffect(() => {
    // Fetch blog count
    axios.get(`${API_BASE}/getBlog.php`)
      .then(res => setTotal(res.data.length))
      .catch(err => console.error("Error fetching blogs:", err))

    // You can add contact count fetching here if you have the endpoint
    axios.get(`${API_BASE}/getContacts.php`)
    .then(res => setContactCount(res.data.length))
    .catch(err => console.error("Error fetching contacts:", err))
  }, [])

  return (
    <div className="admin-home">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Dashboard Overview</h1>
        <p>Selamat datang di panel admin. Kelola konten blog dan pesan contact us dengan mudah.</p>
        
        <div className="quick-actions">
          <a className="btn primary" href="/admin/blog">
             Kelola Blog
          </a>
          <a className="btn secondary" href="/admin/contact">
             Lihat Pesan
          </a>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {/* Blog Articles - Orange Card */}
        <div className="stat-card orange">
          <div className="stat-left">
            <h3>BLOG</h3>
            <h1>{total}</h1>
            <p>Total artikel blog</p>
          </div>
          <div className="stat-right">
            <span className="big-icon">📄</span>
          </div>
        </div>

        {/* Contact Messages - Dark Card */}
        <div className="stat-card dark">
          <div className="stat-left">
            <h3>CONTACT</h3>
            <h1>{contactCount}</h1>
            <p>Pesan masuk</p>
          </div>
          <div className="stat-right">
            <span className="big-icon">📧</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AdminHome