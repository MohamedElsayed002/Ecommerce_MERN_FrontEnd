


import { NavLink, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/context'
import { useRef, useEffect } from 'react'


const Sidebar = ({ setToggled, toggled }) => {

    const { user, LogoutUser } = useAppContext()
    const navigation = useNavigate()
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setToggled(false);
            }
        };

        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setToggled(false);
            }
        };

        document.addEventListener('keydown', handleEscKey);
        window.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const Logout = () => {
        LogoutUser()
        navigation('/')
    }

    return (
        <div className="absolute right-0 bottom-0 bg-orange-500 w-[40%] h-[100%] z-10">
            <div>
                <button
                    className="py-10 mr-28"
                    onClick={() => setToggled((prevState) => !prevState)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            {
                toggled && (
                    <div>
                        <ul className="flex flex-col gap-8 text-3xl">
                            <li className="hover:opacity-70">
                                <NavLink
                                    to="."
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >Home</NavLink>
                            </li>
                            <li className="hover:opacity-70">
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >products</NavLink>
                            </li>
                            <li className="hover:opacity-70">
                                <NavLink
                                    to="/brands"
                                    className={({ isActive }) => isActive ? 'text-white' : ''}
                                >Brands</NavLink>
                            </li>
                            {
                                user.length === 0 && (
                                    <li className="hover:opacity-70">
                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) => isActive ? 'text-white' : ''}
                                        >Login</NavLink>
                                    </li>
                                )
                            }
                            {
                                user?.data?.message === 'login success' && (
                                    <>
                                        <li className="hover:opacity-70">
                                            <NavLink
                                                to="/user/settings"
                                                className={({ isActive }) => isActive ? 'text-white' : ''}
                                            >Settings</NavLink>
                                        </li>
                                        <li className="hover:opacity-70">
                                            <NavLink
                                                to="/user/cart"
                                                className={({ isActive }) => isActive ? 'text-white' : ''}
                                            >Cart</NavLink>
                                        </li>
                                        <li className="hover:opacity-70">
                                            <NavLink
                                                to="/user/Wishlist"
                                                className={({ isActive }) => isActive ? 'text-white' : ''}
                                            >Wishlist</NavLink>
                                        </li>
                                        <li className="hover:opacity-70">
                                            <NavLink
                                                to="/user/contact-us"
                                                className={({ isActive }) => isActive ? 'text-white' : ''}
                                            >Contact Us</NavLink>
                                        </li>
                                        <li className="hover:opacity-70">
                                            <h1
                                                onClick={() => Logout()}
                                                className={({ isActive }) => isActive ? 'text-white' : ''}
                                            >Logout</h1>
                                        </li>
                                    </>

                                )
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default Sidebar