import React from 'react'
import logo from "../assets/Logo.png"
import Container from './Container'
import Button from './Button'


const NavBar = () => {
  return (
    <>
      <nav className='absolute top-0 left-0 backdrop-blur-md bg-white/10 w-full text-white py-6.25'>
        <Container>
          <div className="flex justify-between items-center ">
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='flex items-center gap-5'>
                <li>Home</li>
                <li>About Us</li>
                <li>Schedule</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact Us</li>
            </ul>
             <Button>
              Join The Conference
             </Button>
        </div>
        </Container>
        
      </nav>
    </>
  )
}

export default NavBar
