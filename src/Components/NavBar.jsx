import logo from "../assets/Logo.png"
import Container from './Container'
import Button from './Button'
import { NavLink } from 'react-router'


// Provides the persistent site navigation and primary conference CTA.
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
              <li className='cursor-pointer'>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li className='cursor-pointer'>About Us</li>
              <li className='cursor-pointer'>Schedule</li>
              <li className='cursor-pointer'>Blog</li>
              <li className='cursor-pointer'>Pages</li>
              <li className='cursor-pointer'>Contact Us</li>
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
