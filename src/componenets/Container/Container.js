import './Container.css'
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Porfile from '../../Pages/Porfile/Porfile';
import Browse from '../../Pages/Browse/Browse';
import Stream from '../../Pages/Stream/Stream';
import Details from '../../Pages/Details/Details';

function Container() {
    return (

        <div className='container'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Porfile />} />
                <Route path="browse" element={<Browse />} />
                <Route path="stream" element={<Stream />} />
                <Route path="details" element={<Details />} />
            </Routes>
        </div>
    );
}

export default Container;