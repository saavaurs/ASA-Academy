import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const BlogCard = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get("http://localhost/ASA-Academy/backend/getBlog.php")
      .then((res) => {
        setBlogs(res.data)
      })
      .catch((err) => {
        console.log("ERROR:", err)
      })
  }, [])

  return (
    <>
      {blogs.map((val) => (
        <Link
          to={`/journal/${val.id}`}
          key={val.id}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className='items shadow'>
            {/* Gambar di bagian atas */}
            {val.gambar && (
              <img
                src={`/${val.gambar}`} // Ambil dari public/images
                alt={val.judul}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
            )}

            <div className='text'>
              <div className='admin flexSB'>
                <span>
                  <i className='fa fa-user'></i>
                  <label>{val.penulis}</label>
                </span>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label>{val.tanggal}</label>
                </span>
              </div>
              <h1>{val.judul}</h1>
              <p>{val.isi.substring(0, 100)}...</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default BlogCard
