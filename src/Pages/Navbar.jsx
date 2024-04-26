import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
          ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
          : "text-black mr-4"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
            : "text-black mr-4"
        }
        to="/allTourist"
      >
        All Tourist Spot
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
          ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
          : "text-black mr-4"
        }
        to="/addTourist"
      >
        Add Tourist Spot
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
          ? "text-orange-600 font-bold border-b-4 border-orange-500 mr-4 pb-1"
          : "text-black mr-4"
        }
        to="/mylist"
      >
        My List
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-purple-600 via-pink-400 to-red-400 rounded-lg p-4 font-montserrat">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ExcursionXpert</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to='/login'><button className="btn mr-2 btn-secondary bg-purple-400">Login</button></Link>
        <Link to='/register'><button className="btn mr-2 btn-secondary bg-purple-400">Register</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
