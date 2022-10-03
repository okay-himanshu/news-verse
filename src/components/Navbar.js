import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                   <p>NewsVerse</p>
                </div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/news'>Home</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;