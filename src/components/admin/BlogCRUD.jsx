// src/components/admin/pages/BlogCrud.jsx
import React, { useEffect, useState } from "react"
import axios from "axios"

const API_BASE = "http://localhost/ASA-Academy/backend"

const BlogCrud = () => {
  const [blogs, setBlogs] = useState([])
  const [judul, setJudul] = useState("")
  const [isi, setIsi] = useState("")
  const [gambar, setGambar] = useState(null)
  const [editMode, setEditMode] = useState(false)  // MODE EDIT
  const [editId, setEditId] = useState(null)        // ID BLOG YANG DI-EDIT

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
    if (gambar) formData.append("gambar", gambar)
    formData.append("secret", "asa123")

    let endpoint = `${API_BASE}/addBlog.php`
    if (editMode) {
      formData.append("id", editId)
      endpoint = `${API_BASE}/editBlog.php`
    }

    try {
      const res = await axios.post(endpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      if (res.data.status === "success") {
        alert(editMode ? "Berhasil edit blog" : "Berhasil tambah blog")
        setJudul("")
        setIsi("")
        setGambar(null)
        setEditMode(false)
        setEditId(null)
        fetchBlogs()
        window.scrollTo(0, 0)
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

  const handleEdit = (blog) => {
    setEditMode(true)
    setEditId(blog.id)
    setJudul(blog.judul)
    setIsi(blog.isi)
    setGambar(null) // gambar baru diupload jika diubah
    window.scrollTo(0, 0)
  }

  return (
    <div className="blog-crud">
      <h2 id="add">{editMode ? "Edit Artikel" : "Tambah Artikel"}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
        />
        <textarea
          placeholder="Isi konten"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          rows={8}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setGambar(e.target.files[0])}
        />
        <button type="submit" className="btn primary">
          {editMode ? "Update" : "Simpan"}
        </button>
        {editMode && (
          <button
            type="button"
            className="btn"
            style={{ background: "#ccc", marginLeft: 10 }}
            onClick={() => {
              setEditMode(false)
              setEditId(null)
              setJudul("")
              setIsi("")
              setGambar(null)
            }}
          >
            Batal
          </button>
        )}
      </form>

      <h2 style={{ marginTop: 40 }}>Daftar Artikel</h2>
      {blogs.length === 0 && <p>Belum ada data</p>}
      <div className="blog-list">
        {blogs.map((b) => (
          <div key={b.id} className="blog-item">
            <div className="blog-item-head">
              <strong>{b.judul}</strong>
              <div>
                <button
                  onClick={() => handleEdit(b)}
                  className="btn"
                  style={{ background: "orange", color: "#fff", marginRight: 8 }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="btn danger"
                >
                  Hapus
                </button>
              </div>
            </div>
            <div className="meta">
              {b.penulis} • {b.tanggal}
            </div>
            {b.gambar && (
              <img src={`/${b.gambar}`} alt={b.judul} className="thumb" />
            )}
            <p>{b.isi.substring(0, 160)}...</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogCrud
