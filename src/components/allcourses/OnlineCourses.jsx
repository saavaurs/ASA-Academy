import React, { useState } from "react";
import "./courses.css";

const courses = [
  {
    title: "Data Analyst",
    img: "/images/courses/ux.png",
    videos: [
      "Intro to Data Analysis",
      "Data Cleaning Basics",
      "Data Visualization Techniques",
    ],
  },
  {
    title: "UI/UX Design",
    img: "/images/courses/ux.png",
    videos: [
      "Intro to UI/UX",
      "Wireframing with Figma",
      "User Testing Strategies",
    ],
  },
  {
    title: "FrontEnd Development",
    img: "/images/courses/ux.png",
    videos: [
      "Cyber Security Basics",
      "Threat Detection",
      "Security Best Practices",
    ],
  },
  {
    title: "BackEnd Development",
    img: "/images/courses/ux.png",
    videos: [
      "Frontend vs Backend",
      "Building REST APIs",
      "Deploying Fullstack Apps",
    ],
  },
  {
    title: "Mobile Development",
    img: "/images/courses/ux.png",
    videos: [
      "Intro to Mobile Dev",
      "Flutter Basics",
      "Publishing Apps",
    ],
  },
  {
    title: "Machine Learning",
    img: "/images/courses/ux.png",
    videos: [
      "What is Machine Learning?",
      "Training Models",
      "Model Evaluation",
    ],
  },
];

const OnlineCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="onlineCoursesContainer">
      <h1 className="title">Explore Online Courses</h1>
      {!selectedCourse ? (
        <div className="gridContainer">
          {courses.map((course, index) => (
            <div
              key={index}
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
        <div className="courseDetails">
          <button
            onClick={() => setSelectedCourse(null)}
            className="backButton"
          >
            ← Back to Courses
          </button>
          <h2 className="detailsTitle">{selectedCourse.title} Course</h2>
          <ul className="videoList">
            {selectedCourse.videos.map((video, i) => (
              <li key={i} className="videoItem">
                <span className="playIcon">▶</span>
                <span>{video}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OnlineCourses;