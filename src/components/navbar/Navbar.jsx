import React, { useEffect, useState } from 'react'
import './navbar.css'
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch, AiOutlineMessage, AiFillCloseSquare } from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.currentUser)

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <>
      <nav className={`Navbar ${active || pathname !== '/' ? 'active' : ''}`}>
        <div className="nav-left">
          <Link to="/">
            <img src="/assets/mainlogo.png" alt="logo" />
          </Link>
          <div className="searchbar">
            <input type="text" placeholder="Search courses..." />
            <AiOutlineSearch className="icon" />
          </div>
          {openMenu ? (
            <AiFillCloseSquare className="hamburger" onClick={() => setOpenMenu(false)} />
          ) : (
            <AiOutlineMenu className="hamburger" onClick={() => setOpenMenu(true)} />
          )}
        </div>

        <div className="nav-mid">
          <Link to="/courses" className="navlinks">Courses</Link>
          <span className="navlinks" onClick={() => navigate('/yourcourse')}>Your Courses</span>
          <Link to="/blogs" className="navlinks">Blogs</Link>
          {user && <span className="navlinks" onClick={logout}>Logout</span>}
        </div>

        <div className="nav-right">
          <span><AiOutlineMessage /></span>
          <span className="AiOutlineBell">
            <AiOutlineBell />
            <span className="dot" />
          </span>
          <div className="profile-pp-box">
            <img src="/assets/noavatar.png" alt="avatar" />
          </div>
        </div>
      </nav>

      {openMenu && (
        <div className="side-menu">
          <span>{user?.username || 'Guest'}</span>
          <Link to="/courses" className="navlinks" onClick={() => setOpenMenu(false)}>Courses</Link>
          <span className="navlinks" onClick={() => navigate('/yourcourse')}>Your Courses</span>
          <Link to="/blogs" className="navlinks" onClick={() => setOpenMenu(false)}>Blogs</Link>
          {user && <span className="navlinks" onClick={logout}>Logout</span>}
        </div>
      )}
    </>
  )
}

export default Navbar
