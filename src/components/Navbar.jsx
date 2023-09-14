
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useMediaQuery from '../Hooks/useMediaQuery'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { useAppContext } from '../context/context'


const themes = {
    winter: 'winter',
    dracula: 'dracula'
}


const Navbar = () => {

    const navigate = useNavigate()
    const isAboveMediumScreens = useMediaQuery("(min-width : 980px)")
    const [toggled, setToggled] = useState(false)
    const [theme, setTheme] = useState(themes.winter)

    const handleTheme = () => {
        const { winter, dracula } = themes
        const newTheme = theme === winter ? dracula : winter
        document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(newTheme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])


    const LightOrDark = localStorage.getItem('theme')
    const ThemeIcon = LightOrDark === 'winter' ? (<button onClick={handleTheme} className="mr-4 winter:text-black dark:">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
    </button>) : (<button className="mr-4 light-flex" onClick={handleTheme}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
    </button>)


    const { LogoutUser, user } = useAppContext()
    const { data: info } = user
    
    const Logout = () => {
        LogoutUser()
        navigate('/')
    }

    return (
        <div className="flex justify-around m-10 text-center items-center text-neutral-content">
            <div className="text-3xl">
                <Link to="/">
                    <p className="bg-orange-400 p-2 text-white rounded-md">SHOBIFY</p>
                </Link>
            </div>
            <div>
                {
                    isAboveMediumScreens ? (
                        <div>
                            <ul className="flex gap-4 text-center mt-2 text-xl">
                                <NavLink
                                    to="."
                                    className={({ isActive }) => isActive ? 'text-orange-300' : ''}
                                >
                                    <li className="hover:opacity-70">Home</li>
                                </NavLink>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) => isActive ? 'text-orange-300' : ''}
                                >
                                    <li className="hover:opacity-70">Products</li>
                                </NavLink>
                                <NavLink
                                    to="/brands"
                                    className={({ isActive }) => isActive ? 'text-orange-300' : ''}
                                >
                                    <li className="hover:opacity-70">Brands</li>
                                </NavLink>
                            </ul>
                        </div>
                    ) : (
                        <button onClick={() => setToggled(!toggled)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    )
                }
            </div>
            {
                isAboveMediumScreens && (
                    <div className="flex text-xl mt-2 ">
                        {info && (
                            <div>
                                {ThemeIcon}
                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="btn m-1">Hi, {info?.user?.name}</label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        {
                                            user.data.user.role === 'admin' && <li><Link to="/user/admin">Admin</Link></li>
                                        }
                                        <li><Link to="/user/settings">Settings</Link></li>
                                        <li><Link to="/user/cart">cart</Link></li>
                                        <li><Link to="/user/wishlist"> wishlist</Link></li>
                                        <li><Link to="/user/contact-us">Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )
                        }
                        {
                            info?.user ? (
                                <button
                                    className="ml-4"
                                    onClick={() => Logout()}>Logout</button>
                            ) : (
                                <>
                                    <h1>{ThemeIcon}</h1>
                                    <NavLink to="/login">Login</NavLink>

                                </>
                            )
                        }
                    </div>
                )
            }
            {
                !isAboveMediumScreens && toggled && (
                    <Sidebar setToggled={setToggled} toggled={toggled} />
                )
            }
        </div>
    )
}

export default Navbar



