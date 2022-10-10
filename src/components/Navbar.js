import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'
import { useState } from 'react'
import Search from './Search'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <nav className='flex justify-between items-center p-2 pr-10 pl-10 bg-violet-900 '>
                <div className="cursor-pointer text-white font-medium">
                    NewsVerse
                </div>
                <div className={`absolute top-0 right-0 text-center ${!toggle ? ' -translate-y-48 transition-transform' : '   translate-y-0 transition-transform'}  w-full sm:w-48 sm:relative sm:inline-block sm:-translate-y-0 }`}>
                    <ul className='flex flex-col sm:flex-row space-x-2 bg-violet-900 text-white pb-5 sm:pb-0'>
                        <li id></li>
                        <li ><NavLink to='/'>Home</NavLink></li>
                        <li ><NavLink to='/news'>News</NavLink></li>
                        <li > <Search /></li>
                    </ul>

                </div>
                <div onClick={handleToggle} className='z-10 sm:hidden text-white font-medium'>
                    {
                        toggle ?
                            <MdClose /> :
                            <MdMenu />
                    }
                </div>
            </nav>
            <hr />
        </>
    )
}

export default Navbar;