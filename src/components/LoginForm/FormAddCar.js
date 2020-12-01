import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Mess from '../../constants/Message';
import { DAY, MONTH, YEAR } from '../../constants/calendar';
import { onSaveToCard } from '../../reducers/IDCard';
import {closeShowModal} from '../../reducers/showModal';


const onDay = DAY.map((arr, index) => {
    return <option value={arr} key={index}>{arr}</option>
})

const onMonth = MONTH.map((arr, index) => {
    return <option value={arr} key={index}>{arr}</option>
})

const onYear = YEAR.map((arr, index) => {
    return <option value={arr} key={index}>{arr}</option>
})

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
            name: "",
            khoa: "",
            nienKhoa: "",
            date: "",
            timeIn: "",
            timeOut: "",
        }
    );

    const HandleSubmit = (e) => {
        e.preventDefault();
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
    }

    const HandleChangeCalendar = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if(name === "day" || name === "month"){
            if(value.length < 2) value = `0${value}`;
        }
        console.log(name, '-', value);
        setCalendar({
            ...calendar,
            [name]: value
        })

        // setData({
        //     ...data,
        //     date: `${calendar.day}/${calendar.month}/${calendar.year}`
        // })

    }

    console.log(calendar)

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
        //dispatch(onSaveToCard(dataSave));
        console.log(dataSave.date);
        dispatch(closeShowModal());
    }

    return (
        <div>
            <form className="ml-2 p-2">
                <label className="w-full text-xl mb-4 flex justify-between items-center">
                    <span className="font-hairline w-1/4 text-xl text-gray-800">Họ tên</span>
                    <input type="text" value={data.name || ""} onChange={HandleChangeData} name="name"
                        placeholder="Trần Anh Khôi"
                        className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                </label>
                <label className="w-full text-xl mb-4 flex justify-between items-center">
                    <span className="font-thin w-1/4 text-xl text-gray-800">Mã số sinh viên</span>
                    <input type="text" value={data.mssv || ""} onChange={HandleChangeData} name="mssv"
                        placeholder="123456789"
                        className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                </label>
                <label className="w-full text-xl mb-4 flex justify-between items-center">
                    <span className="font-thin w-1/4 text-xl text-gray-800">Niên khóa</span>
                    <input type="text" value={data.nienKhoa || ""} onChange={HandleChangeData} name="nienKhoa"
                        placeholder="2018"
                        className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                </label>
                <label className="w-full text-xl mb-4 flex justify-between items-center">
                    <span className="font-thin w-1/4 text-xl text-gray-800">Khoa</span>
                    <input type="text" value={data.khoa || ""} onChange={HandleChangeData} name="khoa"
                        placeholder="Công Nghệ Thông Tin"
                        className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                </label>
                <label className="w-full text-xl mb-4 flex justify-between items-center">
                    <div className="font-hairline w-1/4">
                        <p className="font-hairline text-xl text-gray-800">Ngày sinh</p>
                    </div>
                    <div className="w-3/4 flex justify-start text-xl">
                        <div className={`inline-block relative font-thin mr-4 p-2 w-56`}>
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                name="day" value={calendar.day} onChange={HandleChangeCalendar}>
                                {onDay}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        <div className={`inline-block relative font-thin mr-4 p-2 w-56`}>
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                name="month" value={calendar.month} onChange={HandleChangeCalendar}>
                                {onMonth}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        <div className={`inline-block relative font-thin mr-4 p-2 w-56`}>
                            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                name="year" value={calendar.year} onChange={HandleChangeCalendar}>
                                {onYear}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                </label>
                <label className="w-full text-xl mb-4 flex justify-between items-center">
                    <span className="font-thin w-1/4 text-xl text-gray-800">Biển số xe</span>
                    <input type="text" value={data.bsx || ""} onChange={HandleChangeData} name="bsx"
                        placeholder="43K1 - 01636"
                        className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                </label>
            </form>
            <div className="flex justify-center">
                <button className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 py-2 px-10 bg-blue-600 text-white rounded">
                    <p className="text-xl" onClick={() => HandleSave(data)}>Lưu</p>
                </button>
            </div>
        </div>
    );
}

export default LoginForm;