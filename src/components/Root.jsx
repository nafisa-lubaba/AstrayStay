
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div className="bg-[#f6faf9] text-[#2ccb99]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Root;