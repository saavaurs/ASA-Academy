import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import About from './components/about/about.jsx'
import Blog from './components/blog/blog.jsx'
import BlogDetail from './components/blog/BlogDetail'
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
// import Pricing from "./components/faq/Pricing"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Faq from "./components/faq/Faq.jsx"
import AdminGate from "./components/admin/AdminGate.jsx"


// Komponen wrapper untuk mengecek route
const Layout = ({ children }) => {
  const location = useLocation()
  const hideLayout = location.pathname.startsWith("/admin") // Jika /admin, sembunyikan header/footer

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/courses' element={<CourseHome />} />
          <Route exact path='/team' element={<Team />} />
          {/* <Route exact path='/pricing' element={<Pricing />} /> */}
          <Route exact path='/journal' element={<Blog />} />
          <Route exact path='/journal/:id' element={<BlogDetail />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route path="/admin/*" element={<AdminGate />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
