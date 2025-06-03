import React from "react";
import OnlineCourses from "./HOnlineCourses"; // Perbaiki nama file/component
import "./HCoursesHome.css"; // Pastikan file CSS sesuai nama file ini

const HCourseHome = () => {
  return (
    <div className="coursesContainer">
      <OnlineCourses />
    </div>
  );
};

export default HCourseHome;