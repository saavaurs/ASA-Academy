import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses"; // Tambahkan impor ini
import "./courses.css";

const CourseHome = () => {
  return (
    <div className="coursesContainer">
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses />
    </div>
  );
};

export default CourseHome;