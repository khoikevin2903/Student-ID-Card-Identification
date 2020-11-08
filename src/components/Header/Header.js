import React from 'react';
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <div className="flex items-center p-4 bg-gray-500 text-white"
             style={{"background": "linear-gradient(90deg, rgba(222,212,232,1) 4%, rgba(56,106,228,1) 49%, rgba(112,30,212,1) 77%)"}}>
            <Link to="/" className="mx-6">
                <p className="text-2xl">Trang Chủ</p>
            </Link>
            <Link to="/baixe" className="mx-6">
                <p className="text-2xl">Bãi Xe</p>
            </Link>
            {/* <Link to="/timkiem" className="mx-6">
                <p className="text-2xl">Tìm Kiếm</p>
            </Link> */}
        </div>
    );
}

export default Header;