import { Link, Outlet } from 'react-router-dom'


const Services = () => {
  return (
    <>
    <div><input type="search" placeholder="Search services..."/></div>
    <nav className="flex gap-5 items-center justify-center underline ">
    <Link to="book-service">Book service</Link>
    <Link to="see-service">See Our Services</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default Services
