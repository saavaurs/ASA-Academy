// ini sidebar yang di kiri
import React from "react"
import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import AdminHome from "./AdminHome"
import BlogCrud from "./BlogCRUD"
//import AdminContact from "../pages/AdminContact" nyalain ini kalo udah ada codingan contact nya
import "./admin.css" // CSS sidebar & cards

const AdminLayout = ({ onLogout }) => {
  return (
    <div className="admin-wrapper">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="brand">
          <span role="img" aria-label="shield">🛡️</span> Admin<br/>
        </div>

        <nav className="menu">
          <NavLink end to="/admin" className={({isActive}) => isActive ? "active" : ""}>
            <span role="img" aria-label="chart">📊</span> Dashboard
          </NavLink>
          <NavLink to="/admin/blog" className={({isActive}) => isActive ? "active" : ""}>
          <span role="img" aria-label="blog">📝</span> Kelola Blog
          </NavLink>
          <NavLink to="/admin/contact" className={({isActive}) => isActive ? "active" : ""}>
          <span role="img" aria-label="mail">📬</span> Contact Us
          </NavLink>
          <button className="logout" onClick={onLogout}>
            <span role="img" aria-label="exit">🚪</span> Logout
          </button>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="admin-main">
        <Routes>
          <Route index element={<AdminHome />} />
          <Route path="blog" element={<BlogCrud />} />

          
          <Route path="*" element={<Navigate to="/admin" />} />
          //nyalain ini kalo udah ada codingan contact nya
          {/* <Route path="contact" element={<AdminContact />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default AdminLayout
