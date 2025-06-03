import React from "react"
//import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import HOnlineCourses from "./HOnlineCourses"
import HContact from "./HContact"
//import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      {/* <AboutCard /> */}
      <HAbout />
      <HOnlineCourses />
      <Testimonal />
      <Hblog />
      <HContact />
      {/* <Hprice /> */}
      
    </>
  )
}

export default Home
