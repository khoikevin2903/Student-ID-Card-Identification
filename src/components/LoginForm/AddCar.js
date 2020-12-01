import React from 'react';
import './AddCar.scss';
import ClassNames from 'classnames';
import FormAddCar from './FormAddCar';

function LoginPage(props) {
    
    return (
        <div className="loginForm bg-gray-200 flex">
            <div className="w-2/5 rigthContent bg-white">
                <h2 className="text-2xl font-bold">Trường Đại Học Bách Khoa - Đại Học Đà Nẵng</h2>
                <img className="mt-8" src="https://tintuctuyensinh.vn/wp-content/uploads/2020/10/ma-nganh-dai-hoc-bach-khoa-da-nang-1.jpg"></img>
                <img className="mt-2" src="https://danangz.vn/wp-content/uploads/2016/11/9.jpg"></img>
              
            </div>
            <div className="w-3/5 bg-white m-6">
                <ul className="flex border-b border-gray-300 justify-center">
                    <li className={ClassNames(
                        'cursor-pointer pt-4 pl-8 text-3xl font-light hover:bg-white',
                    )} >
                        Nhập thông tin sinh viên
                    </li>
                </ul>
                <div className="mt-8">
                    <FormAddCar />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;