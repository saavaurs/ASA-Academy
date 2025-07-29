import React, { useState } from "react";
import "./courses.css";
import { courses } from "../../dummydata.js";
import PreTest from "./PreTest";
import PostTest from "./PostTest";

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
                  <span className="sidebarIcon">▶</span> {selectedCourse.videoTitles && selectedCourse.videoTitles[i] ? selectedCourse.videoTitles[i] : (video.endsWith(".mp4") ? `Video ${i + 1}` : video)}
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
                  <PreTest
                    questions={selectedCourse.preTest || []}
                    onClose={() => setSelectedVideo(null)}
                  />
                </div>
              )}
              {typeof selectedVideo === "number" && (
                <div className="videoBox">
                  {selectedCourse.videos[selectedVideo].includes('youtube.com') || selectedCourse.videos[selectedVideo].includes('youtu.be') ? (
                    <iframe
                      key={selectedCourse.videos[selectedVideo]}
                      src={`https://www.youtube.com/embed/${selectedCourse.videos[selectedVideo].split('youtu.be/')[1]?.split('?')[0] || selectedCourse.videos[selectedVideo].split('v=')[1]?.split('&')[0]}`}
                      width="100%"
                      height="400"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={selectedCourse.videoTitles && selectedCourse.videoTitles[selectedVideo] ? selectedCourse.videoTitles[selectedVideo] : `Video ${selectedVideo + 1}`}
                      style={{border:0, borderRadius:12, background:'#000'}}
                    />
                  ) : selectedCourse.videos[selectedVideo].includes('drive.google.com') ? (
                    <iframe
                      key={selectedCourse.videos[selectedVideo]}
                      src={selectedCourse.videos[selectedVideo]}
                      width="100%"
                      height="400"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={selectedCourse.videoTitles && selectedCourse.videoTitles[selectedVideo] ? selectedCourse.videoTitles[selectedVideo] : `Video ${selectedVideo + 1}`}
                      style={{border:0, borderRadius:12, background:'#000'}}
                    />
                  ) : selectedCourse.videos[selectedVideo].endsWith(".mp4") ? (
                    <video
                      key={selectedCourse.videos[selectedVideo]}
                      width="100%"
                      height="400"
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
                  <PostTest
                    questions={selectedCourse.postTest || []}
                    onClose={() => setSelectedVideo(null)}
                  />
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

