import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { NavLink, Link } from 'react-router-dom';
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";


const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const nav =
        user ? (<>

            <div className="flex gap-2">
                <button className="text-2xl"><MdOutlineMapsHomeWork /></button>


                <NavLink to='/' className={({ isActive }) => isActive ? ' text-[#158260]  text-xl font-bold' : 'font-bold text-xl px-2'}>Home</NavLink>
            </div>
            <div className="flex gap-2">
                <button className="text-2xl"><IoBedOutline /></button>

                <NavLink to='/rooms' className={({ isActive }) => isActive ? '  text-[#158260]  px-3 text-xl font-bold' : 'font-bold text-xl'}>Rooms</NavLink>
            </div>
            <div className="flex gap-2">

                {/* <img  className="w-6 text-2xl ml-2 bg-white text-white" src={logo} alt="" /> */}
                <button className="text-2xl "><CgCalendarDates /></button>

                <NavLink to='/my-booking' className={({ isActive }) => isActive ? ' text-[#158260]  px-3 text-xl font-bold' : 'font-bold text-xl'}>My Bookings</NavLink>
            </div>

            {/* <div className="flex gap-2 ">
            <button className="text-2xl"><MdContactMail /></button>
                <NavLink to='/contact-us' className={({ isActive }) => isActive ? '  text-[#158260]   px-3 text-xl font-bold' : 'font-bold text-xl'}>Contact Us</NavLink>

            </div> */}
        </>) :
            (

                <div className="lg:flex gap-5">
                    <NavLink to='/' className="flex items-center space-x-2" activeClassName="border bg-[#411b18] text-white px-3 text-xl font-bold">
                        <button className="text-2xl"><MdOutlineMapsHomeWork /></button>
                        <span className="font-bold text-xl text-[#158260] ">Home</span>
                    </NavLink>
                    <Link to='/signin'>
                        <button className="btn  bg-[#158260] text-white  w-full ">SignIn</button>
                    </Link>
                    <Link to='/signup'>
                        <button className="btn bg-[#158260] text-white w-full">Registration</button>
                    </Link>




                </div>
            )
    return (
        <div>


            <div className="navbar mb-5">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow w-52  rounded-badge bg-[#f6faf9]">
                            {nav}




                        </ul>
                    </div>


                    <div className="flex gap-2">
                        <img className="w-8" src="https://i.ibb.co/jVhVbnC/image.png" alt="" />
                        <a className="text-2xl w-20 font-bold bg-green"><img src='' alt="" />AstraStay</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">

                    {nav}



                </div>



                <div className="navbar-end">


                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} title={user.displayName} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>

                            <ul tabIndex={0} title={user.displayName} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logOut}
                                    >Logout</button>

                                </li>
                            </ul>

                        </div>
                            :
                            null
                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;