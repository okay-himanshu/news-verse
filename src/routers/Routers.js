import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Category from '../pages/Category';
import Home from '../pages/Home';
import News from '../pages/News';

const Routers = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/news' element={<News />}></Route>
                    <Route path='/category' element={<Category />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers;