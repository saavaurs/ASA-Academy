import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost/ASA-Academy/backend/getBlog.php?id=${id}`)
      .then(res => {
        setBlog(res.data)
      })
      .catch(err => console.error(err))
  }, [id])

  if (!blog) return <p>Loading...</p>

  return (
    <div className='container' style={{ padding: "30px" }}>
      {blog.gambar && (
        <img
          src={`/${blog.gambar}`}
          alt={blog.judul}
          style={{ width: "100%", height: "350px", objectFit: "cover", marginBottom: "20px" }}
        />
      )}
      <h1>{blog.judul}</h1>
      <p><strong>Penulis:</strong> {blog.penulis}</p>
      <p><strong>Tanggal:</strong> {blog.tanggal}</p>
      <hr />
      <p style={{ marginTop: "20px", fontSize: "18px", lineHeight: "1.6" }}>{blog.isi}</p>
    </div>
  )
}

export default BlogDetail
