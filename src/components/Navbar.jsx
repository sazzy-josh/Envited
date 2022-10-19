import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute top-2 right-2'>
        <ul className='hidden lg:flex justify-around gap-x-4 pr-[160px] text-md font-semibold text-[#240D57] mt-4 '>
        <li className='nav'>
          <NavLink to="/"
            className={({ isActive }) => ( isActive ? "active" : "not-active" )}
            >
            Home
          </NavLink>
        </li> 
        <li>
        <NavLink to="/events"       
          className={({ isActive }) => ( isActive ? "active" : "not-active" )}
         >
          My Events
        </NavLink>
        </li>
        <li>
        <NavLink to="/event"       
          className={({ isActive }) => ( isActive ? "active" : "not-active" )}
         >
          My Event
        </NavLink>
        </li>
        
        </ul>
   </div>
  )
}

export default Navbar