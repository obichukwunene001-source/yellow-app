import { Menu, X } from 'lucide-react';
import React, { useState} from 'react';
import { NavLink} from 'react-router-dom'
import { Link} from 'react-router-dom'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="text-black font-semibold fixed z-2000 w-full top-0 " style={{ background: 'rgb(232,233,220)' }}>
    <div className="flex items-center max-w-7xl mx-auto px-4 py-6 justify-between md:px-20">
        <Link to="/">Logo</Link>
        <nav className="hidden md:flex gap-7 ">
            <NavLink to="/"className="hover:text-blue-400">Home</NavLink>
            <NavLink to="/about"className="hover:text-blue-400">About</NavLink>
            <NavLink to="/services"className="hover:text-blue-400">Services</NavLink>
            <NavLink to="/profile"className="hover:text-blue-400">Account</NavLink>

        </nav>
        <button className="md:hidden" onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
        </button>
    </div>
    {isOpen &&
    <nav className="md:hidden flex gap-7 flex-col pl-7 pt-7 pb-200 w-full">
          <NavLink to="/" className="hover:text-blue-400" onClick={()=> setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-400" onClick={()=> setIsOpen(false)}>About</NavLink>
            <NavLink to="/services" className="hover:text-blue-400"  onClick={()=> setIsOpen(false)}>Services</NavLink>
            <NavLink to="/contact" className="hover:text-blue-400" onClick={()=> setIsOpen(false)}>Contact</NavLink>
           
    </nav>
}
   </header>
  )
}

export default Navbar;