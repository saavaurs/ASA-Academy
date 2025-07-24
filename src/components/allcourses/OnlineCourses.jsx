import React, { useState } from "react";
import "./courses.css";
import { courses } from "../../dummydata.js";

const OnlineCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const preTest = { title: "Pre-test", type: "pretest" };
  const postTest = { title: "Post-test", type: "posttest" };

  // Reset selectedVideo setiap kali course berubah
  React.useEffect(() => {
    setSelectedVideo(null);
  }, [selectedCourse]);

  return (
    <div className="coursePageContainer">
      {!selectedCourse ? (
        <div className="gridContainer">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="courseCard"
              onClick={() => setSelectedCourse(course)}
            >
              <img src={course.img} alt={course.title} className="courseImage" />
              <h2 className="courseTitle">{course.title}</h2>
              <button className="outline-btn">Learn More</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="courseDetailLayout">
          {/* Sidebar */}
          <div className="courseSidebar">
            <button
              className="outline-btn"
              onClick={() => {
                setSelectedCourse(null);
                setSelectedVideo(null);
              }}
            >
              ← Back to Courses
            </button>
            <ul>
              <li
                className={`sidebarItem ${selectedVideo === "pretest" ? "active" : ""}`}
                onClick={() => setSelectedVideo("pretest")}
              >
                <span className="sidebarIcon">📝</span> {preTest.title}
              </li>
              {selectedCourse.videos.map((video, i) => (
                <li
                  key={i}
                  className={`sidebarItem ${selectedVideo === i ? "active" : ""}`}
                  onClick={() => setSelectedVideo(i)}
                >
                  <span className="sidebarIcon">▶</span> {video.endsWith(".mp4") ? `Video ${i + 1}` : video}
                </li>
              ))}
              <li
                className={`sidebarItem ${selectedVideo === "posttest" ? "active" : ""}`}
                onClick={() => setSelectedVideo("posttest")}
              >
                <span className="sidebarIcon">📝</span> {postTest.title}
              </li>
            </ul>
          </div>
          {/* Main Content */}
          <div className="courseMainContent">
            <div className="courseContentBox">
              {selectedVideo === "pretest" && (
                <div className="testBox">
                  <h3>Pre-test</h3>
                  <p>Kerjakan pre-test sebelum memulai materi.</p>
                  {/* Komponen quiz/soal */}
                </div>
              )}
              {typeof selectedVideo === "number" && (
                <div className="videoBox">
                  {selectedCourse.videos[selectedVideo].endsWith(".mp4") ? (
                    <video
                      key={selectedCourse.videos[selectedVideo]} // Gunakan key agar video reload setiap klik
                      width="480"
                      height="270"
                      controls
                    >
                      <source src={selectedCourse.videos[selectedVideo]} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <h3>{selectedCourse.videos[selectedVideo]}</h3>
                  )}
                </div>
              )}
              {selectedVideo === "posttest" && (
                <div className="testBox">
                  <h3>Post-test</h3>
                  <p>Kerjakan post-test setelah menyelesaikan materi.</p>
                  {/* Komponen quiz/soal */}
                </div>
              )}
              {selectedVideo === null && (
                <div className="courseWelcome">
                  <h3>Yuk Mulai Belajar!</h3>
                  <p>Klik salah satu video atau materi, lalu uji seberapa sudah kemampuan mu dengan quiz!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlineCourses;