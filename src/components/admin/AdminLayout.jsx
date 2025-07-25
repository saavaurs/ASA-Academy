import React from "react"
import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import AdminHome from "./AdminHome"
import BlogCrud from "./BlogCRUD"
import AdminContact from "./AdminContact"
import "./admin.css"

const AdminLayout = ({ onLogout }) => {
  return (
    <div className="admin-wrapper">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/images/logo navbar.png" alt="Admin Logo" style={{ width: "45px", height: "28px" }} />
          <span>Dashboard</span>
        </div>

        <nav className="menu">
          <NavLink end to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
            <img src="/images/blog/dashboard.png" alt="Dashboard" style={{ width: "20px" }} /> Dashboard
          </NavLink>

          <NavLink to="/admin/blog" className={({ isActive }) => (isActive ? "active" : "")}>
            <img src="/images/blog/kelolablog.png" alt="Kelola Blog" style={{ width: "20px" }} /> Kelola Blog
          </NavLink>

          <NavLink to="/admin/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            <img src="/images/blog/kontakmasuk.png" alt="Contact Us" style={{ width: "20px" }} /> Contact Us
          </NavLink>

          <button className="logout" onClick={onLogout}>
            <img src="/images/blog/logoutt.png" alt="Logout" style={{ width: "20px" }} /> Logout
          </button>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <Routes>
          <Route index element={<AdminHome />} />
          <Route path="blog" element={<BlogCrud />} />
          <Route path="contact" element={<AdminContact />} />
          {/* Redirect any unknown paths to the home */}
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </main>
    </div>
  )
}

export default AdminLayout
