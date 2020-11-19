import React from 'react';

function footer(props) {

    return (
        <div className="flex justify-center items-center p-2"
            style={{ "background": "linear-gradient(90deg, rgba(113,28,203,1) 16%, rgba(56,106,228,1) 53%, rgba(238,238,240,1) 95%)" }}>
            <img src="https://soict.org/public/img/Logo_dhbkdn.jpg" alt="" width={90} />
            <h1 className="text-2xl ml-40 mr-48 text-white py-6 px-16">Đồ Án Hệ Thống Thông Minh</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTE_1NTXO2hYzXteliaXvdOU-mcF1WIaaQMRQ&usqp=CAU" alt="" width={90} />
        </div>
    );
}

export default footer;