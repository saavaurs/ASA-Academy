// src/components/admin/AdminGate.jsx
import React, { useState, useEffect } from "react"
import AdminDashboard from "./AdminDashboard"

const PASSWORD = "asa123" // ganti sesukamu

const AdminGate = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [password, setPassword] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("isAdmin")
    if (saved === "true") setIsAuth(true)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === PASSWORD) {
      setIsAuth(true)
      localStorage.setItem("isAdmin", "true")
    } else {
      alert("Password salah!")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("isAdmin")
    setIsAuth(false)
  }

  if (isAuth) return <AdminDashboard onLogout={handleLogout} />

  return (
    <div style={{ maxWidth: 360, margin: "80px auto", textAlign: "center" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Password admin"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, margin: "10px 0" }}
        />
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Masuk
        </button>
      </form>
    </div>
  )
}

export default AdminGate
