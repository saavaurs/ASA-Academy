// src/components/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react"
import axios from "axios"

const API_BASE = "http://localhost/ASA-Academy/backend"

const AdminDashboard = ({ onLogout }) => {
  const [blogs, setBlogs] = useState([])
  const [judul, setJudul] = useState("")
  const [isi, setIsi] = useState("")
  const [gambar, setGambar] = useState(null) // file image

  const fetchBlogs = () => {
    axios.get(`${API_BASE}/getBlog.php`).then((res) => setBlogs(res.data))
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("judul", judul)
    formData.append("isi", isi)
    formData.append("penulis", "Admin")
    formData.append("gambar", gambar) // file
    formData.append("secret", "asa123") // optional: proteksi backend sederhana

    try {
      const res = await axios.post(`${API_BASE}/addBlog.php`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      if (res.data.status === "success") {
        alert("Berhasil tambah blog")
        setJudul("")
        setIsi("")
        setGambar(null)
        fetchBlogs()
      } else {
        alert("Gagal: " + (res.data.error || "Unknown error"))
      }
    } catch (err) {
      console.error(err)
      alert("Terjadi kesalahan")
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin hapus?")) return
    try {
      const res = await axios.post(`${API_BASE}/deleteBlog.php`, {
        id,
        secret: "asa123",
      })
      if (res.data.status === "success") {
        fetchBlogs()
      } else {
        alert("Gagal hapus")
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Admin Dashboard - Blog</h1>
        <button onClick={onLogout}>Logout</button>
      </div>

      {/* FORM TAMBAH */}
      <form onSubmit={handleSubmit} style={{ margin: "20px 0", border: "1px solid #ddd", padding: 20, borderRadius: 6 }}>
        <h3>Tambah Blog</h3>
        <input
          type="text"
          placeholder="Judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
          required
        />
        <textarea
          placeholder="Isi konten"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          rows={8}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setGambar(e.target.files[0])}
          style={{ marginBottom: 10 }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 16px" }}>Simpan</button>
      </form>

      <hr />

      {/* LIST BLOG */}
      <h3>Daftar Blog</h3>
      {blogs.length === 0 && <p>Belum ada data</p>}
      {blogs.map((b) => (
        <div
          key={b.id}
          style={{
            border: "1px solid #eee",
            borderRadius: 6,
            padding: 15,
            marginBottom: 10,
          }}
        >
          <strong>{b.judul}</strong>
          <div style={{ fontSize: 12, color: "#666" }}>
            {b.penulis} • {b.tanggal}
          </div>
          {b.gambar && (
            <img
              src={`/${b.gambar}`}
              alt={b.judul}
              style={{ width: 200, marginTop: 10, display: "block" }}
            />
          )}
          <p style={{ color: "#444" }}>{b.isi.substring(0, 120)}...</p>
          <button onClick={() => handleDelete(b.id)} style={{ color: "white", background: "red", padding: "4px 8px", border: 0, borderRadius: 4 }}>
            Hapus
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdminDashboard
