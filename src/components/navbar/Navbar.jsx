import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { AiFillCloseSquare, AiOutlineBell, AiOutlineMenu, AiOutlineMessage, AiOutlineSearch } from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const { pathname } = useLocation();
  const [openmenu, setOpenMenu] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  return (
    <>
      <div className={active || pathname !== "/" ? 'Navbar active' : 'Navbar'}>
        <div className='nav-left'>
          <Link to='/'><img src="/assets/mainlogo.png" alt="" /></Link>
          <div className='searchbar'>
            <input type='text' placeholder='search for a course..'></input>
            <AiOutlineSearch className='AiOutlineSearch' />
          </div>
          {openmenu ? openmenu && <AiFillCloseSquare className='AiOutlineMenu AiFillCloseSquare' onClick={() => setOpenMenu(false)}  /> : <AiOutlineMenu className='AiOutlineMenu' onClick={() => setOpenMenu(!openmenu)} />}

        </div>
        <div className="nav-mid">
          <Link to={`/courses`}>
            <span className="navlinks">COURSES</span>
          </Link>
          <span className="navlinks">YOUR COURSES</span>
          <span className="navlinks">About</span>
          <span className="navlinks">Logout</span>
        </div>
        <div className="nav-right">
          <span>
            <AiOutlineMessage />
          </span>
          <span className='AiOutlineBell'>
            <AiOutlineBell />
            <span className='dot'></span>
          </span>
          <div className='profile-pp-box'>
            <img src='/assets/noavatar.png' alt='pp'></img>
          </div>
        </div>
      </div>
      {
        openmenu &&
        <div className="side-menu">
          <span>UserName</span>
          <Link to={`/courses`}>
            <span className="navlinks" onClick={()=>setOpenMenu(false)}>COURSES</span>
          </Link>
          <span className="navlinks">YOUR COURSES</span>
          <span className="navlinks">About</span>
          <span className="navlinks">Logout</span>
        </div>
      }
    </>
  )
}

export default Navbar
