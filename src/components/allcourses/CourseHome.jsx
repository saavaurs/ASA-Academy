import React from "react";
import Back from "../common/back/Back";
import OnlineCourses from "./OnlineCourses"; // Tambahkan impor ini
import "./courses.css";

const CourseHome = () => {
  return (
    <div className="coursesContainer">
      <OnlineCourses />
    </div>
  );
};

export default CourseHome;