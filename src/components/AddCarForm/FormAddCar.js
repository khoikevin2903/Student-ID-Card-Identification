import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Mess from '../../constants/Message';
import { onSaveToCard } from '../../reducers/IDCard';
import { closeShowModal } from '../../reducers/showModal';

function LoginForm(props) {

    const dispatch = useDispatch();

    const [mess, setMess] = useState(Mess.LOGIN_FAIL_INFO);

    const [calendar, setCalendar] = useState({
        day: "",
        month: "",
        year: ""
    });

    const [data, setData] = useState(
        {
            imgIDCard: "",
            imgCar: "",
            mssv: "",
            bsx: "",
            timeIn: "",
            timeOut: "",
        }
    );

    const HandleChangeCalendar = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if (name === "day" || name === "month") {
            if (value.length < 2) value = `0${value}`;
        }
        setCalendar({
            ...calendar,
            [name]: value
        })
    }

    const HandleChangeData = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const HandleSave = (dataSave) => {
         // if (account.username !== "" && account.password !== "") {
        //     if (account.username.search('@gmail.com') !== -1) {
        //         if (account.username === "khoikevin2903@gmail.com" && account.password === "27100401") {
        //             dispatch(closeShowModal());
        //             dispatch(LoginActive());
        //         }
        //         else {
        //             setMess(Mess.LOGIN_FAIL_PASS);
        //             setCheck(false);
        //         }
        //     }
        //     else if (isNaN(account.username)) {
        //         setMess(Mess.LOGIN_FAIL_SDT);
        //         setCheck(false);
        //     }
        // }
        // else {
        //     setMess(Mess.LOGIN_FAIL_INFO);
        //     setCheck(false);
        // }
        dispatch(onSaveToCard(dataSave));
        dispatch(closeShowModal());
    }

    const HandleCloseForm = () => {
        dispatch(closeShowModal());
    }

    return (
        <div>
            <form className="ml-2 p-2">
                <label className="w-full text-xl mb-4 flex justify-between items-center">
                    <span className="font-normal w-1/3 text-xl text-gray-800">Mã số sinh viên</span>
                    <input type="text" value={data.mssv || ""} onChange={HandleChangeData} name="mssv"
                        placeholder="123456789"
                        className="outline-none w-2/3 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                </label>
                <label className="w-full text-xl mb-4 mt-10 flex justify-between items-center">
                    <span className="font-normal w-1/3 text-xl text-gray-800">Biển số xe</span>
                    <input type="text" value={data.bsx || ""} onChange={HandleChangeData} name="bsx"
                        placeholder="43K1 - 01636"
                        className="outline-none w-2/3 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                </label>
            </form>
            <div className="flex items-center justify-center mt-4">
                <div className="flex justify-center mr-4">
                    <button className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 py-2 px-4 bg-blue-600 text-white rounded">
                        <p className="text-xl" onClick={() => HandleCloseForm()}>Hủy Bỏ</p>
                    </button>
                </div>
                <div className="flex justify-center">
                    <button className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 py-2 px-8 bg-blue-600 text-white rounded">
                        <p className="text-xl" onClick={() => HandleSave(data)}>Lưu</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;