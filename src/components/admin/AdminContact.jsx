import React, { useEffect, useState } from "react";

const AdminContact = () => {
  const [pesan, setPesan] = useState([]);

  useEffect(() => {
    fetch("http://localhost/ASA-Academy/backend/contact.php")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPesan(data);
        } else {
          console.error("Data tidak valid:", data);
        }
      })
      .catch((error) => console.error("Gagal memuat data:", error));
  }, []);

  return (
    <div className="admin-contact">
      <h2>Pesan Masuk</h2>
      {pesan.length === 0 ? (
        <p>Belum ada pesan.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Subjek</th>
              <th>Pesan</th>
            </tr>
          </thead>
          <tbody>
            {pesan.map((item, index) => (
              <tr key={index}>
                <td>{item.nama}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.pesan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminContact;
