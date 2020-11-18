import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Calendar from '../../components/Calendar';
import { DAY, MONTH, YEAR } from '../../constants/calendar';
import * as firebase from 'firebase';
import { onSaveToCard } from '../../reducers/IDCard';

const info = JSON.parse(localStorage.getItem('info'));

function HomePage(props) {

    const dispatch = useDispatch();

    const fetchInput = (endpoint) => new Promise((a, b) => {
        var data = {};
        var dbRef = firebase.database().ref().child(endpoint);
        dbRef.on('value', snap => {
            info.map(x => {
                if (x.mssv === snap.val().mssv) {
                    data = snap.val();
                    Object.assign(data, x);
                }
            });
            setData(data);

        });
    })

    const [data, setData] = useState(
        {
            imgIDCard: "",
            imgCar: "",
            mssv: "000000000",
            bsx: "",
            name: "",
            khoa: "",
            nienKhoa: "",
            date: "",
            thoiGian: ""
        }
    );

    useEffect(() => {
        fetchInput('input');
    }, []);

    console.log(data);

    const HandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const HandleSave = (dataSave) => {
        dispatch(onSaveToCard(dataSave));
    }

    return (
        <div className="bg-gray-200 pb-8 mb-1">
            <div className="flex justify-center">
                <div className="container px-4 pt-10 pb-2 flex justify-center">
                    <div>
                        <div className=" p-4">
                            <div className="bg-white flex justify-center shadow-md mb-2 p-2 border border-gray-400">
                                {data.imgIDCard !== "" && <img src={require(`../../img/${data.imgIDCard}`)} alt="" width={278} height={278} />}
                            </div>
                            <div className="bg-white flex justify-center shadow-md p-2 border border-gray-400">
                                {data.imgCar !== "" && <img src={require(`../../img/${data.imgCar}`)} alt="" width={278} height={278} />}
                            </div>
                        </div>
                    </div>
                    <form className="ml-2 p-2">
                        <label className="w-full text-xl mb-4 flex justify-between items-center">
                            <span className="font-hairline w-1/4 text-xl text-gray-800">Họ tên</span>
                            <input type="text" value={data.name || ""} onChange={HandleChange} name="name"
                                className="outline-none w-3/4 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-800">Mã số sinh viên</span>
                            <input type="text" value={data.mssv || ""} onChange={HandleChange} name="mssv"
                                className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-800">Niên khóa</span>
                            <input type="text" value={data.nienKhoa || ""} onChange={HandleChange} name="nienKhoa"
                                className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-800">Khoa</span>
                            <input type="text" value={data.khoa || ""} onChange={HandleChange} name="khoa"
                                className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                        <label className="w-full text-xl mb-4 flex justify-between items-center">
                            <div className="font-hairline w-1/4">
                                <p className="font-hairline text-xl text-gray-800">Ngày sinh</p>
                            </div>
                            <div className="w-3/4 flex justify-start text-xl">
                                <Calendar Arrays={DAY} val={data.date ? parseInt(data.date.substring(0, 2)) : ""} name="Day" width="w-56" />
                                <Calendar Arrays={MONTH} val={data.date ? parseInt(data.date.substring(3, 5)) : ""} name="Month" width="w-56" />
                                <Calendar Arrays={YEAR} val={data.date ? parseInt(data.date.substring(6, 10)) : ""} name="Year" width="w-56" />
                            </div>
                        </label>
                        <label className="w-full text-xl mb-4 flex justify-between items-center">
                            <span className="font-thin w-1/4 text-xl text-gray-800">Biển số xe</span>
                            <input type="text" value={data.bsx || ""} onChange={HandleChange} name="bsx"
                                className="outline-none w-3/4 opacity-75 p-2 border border-gray-300 font-medium pl-4" style={{ borderRadius: '5px 5px 5px 5px' }} />
                        </label>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center p-3">
                <button className="mr-6 transition duration-500 ease-in-out bg-blue-500 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 py-2 px-6 bg-blue-600 text-white rounded">
                    <p className="text-xl">Hủy Bỏ</p>
                </button>
                <button className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 py-2 px-10 bg-blue-600 text-white rounded">
                    <p className="text-xl" onClick={() => HandleSave(data)}>Lưu</p>
                </button>
            </div>
        </div>
    );
}

export default HomePage;