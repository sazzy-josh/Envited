import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <Link to='/'>
       <header className='header tracking-wider'>Envato</header>
      </Link>

        <div className='absolute top-2 right-2'>
            <ul className='hidden lg:flex justify-around gap-x-4 pr-[160px] text-md font-semibold text-[#240D57] mt-4 '>
            <li>
              <NavLink to="/"
                className={({ isActive }) => ( isActive ? "active" : "" )}
                >
                Home
              </NavLink>
            </li> 
            <li>
            <NavLink to="/events"       
              className={({ isActive }) => ( isActive ? "active" : "" )}
            >
              My Events
            </NavLink>
            </li>  
            </ul>
      </div> 
    </>
  )
}

export default Navbar