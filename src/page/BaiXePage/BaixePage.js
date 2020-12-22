import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import './BaixePage.scss';
const info = JSON.parse(localStorage.getItem('info'));

function BaixePage(props) {

    var [data, setData] = useState([]);

    const fetchData = () => {
        new Promise((a, b) => {
            var dbRef = firebase.database().ref().child('baixe');
            dbRef.on('value', snap => setData(snap.val()));
        })
    }

    const [filter, setFilter] = useState({
        filterID: "",
        filterBSX: "",
        filterTimeIn: "",
        filterTimeOut: ""
    });

    useEffect(() => {
        fetchData();
    }, [])

    const HandleChangeFilter = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        setFilter({
            ...filter,
            [name]: value
        });
    }
    if (filter) {
        if (filter.filterID.length > 0) {
            data = Object.keys(data).map(k => data[k]).reverse().filter((item) => {
                return item.mssv.indexOf(filter.filterID) !== -1;
            })
        }
        if (filter.filterBSX.length > 0) {
            data =Object.keys(data).map(k => data[k]).reverse().filter((item) => {
                return item.bsx.indexOf(filter.filterBSX) !== -1;
            })
        }
        if (filter.filterTimeIn.length > 0) {
            data = Object.keys(data).map(k => data[k]).reverse().filter((item) => {
                return item.timeIn.indexOf(filter.filterTimeIn) !== -1;
            })
        }
        if (filter.filterTimeOut.length > 0) {
            data = Object.keys(data).map(k => data[k]).reverse().filter((item) => {
                return item.timeOut.indexOf(filter.filterTimeOut) !== -1;
            })
        }
    }

    console.log(data);

    const [showItem, setShowItem] = useState({
        imgIDCard: "",
        imgCar: "",
        name: "",
        mssv: "",
        date: "",
        nienKhoa: "",
        khoa: "",
        timeIn: "",
        timeOut: "",
        bsx: ""
    });

    const HandleGetItem = (item) => {
        info.map(x => {
            if (x.mssv === item.mssv) {
                setShowItem({
                    ...showItem,
                    imgIDCard: item.imgIDCard,
                    imgCar: item.imgCar,
                    name: x.name,
                    mssv: item.mssv,
                    date: x.date,
                    nienKhoa: x.nienKhoa,
                    khoa: x.khoa,
                    timeIn: item.timeIn,
                    timeOut: item.timeOut,
                    bsx: item.bsx
                });
            }
        });
    }

    const elmItem = Object.keys(data).map(k => data[k]).reverse().map((item, index) => {
        return (
            <tr className="bg-gray-100 cursor-pointer hover:bg-gray-300"
                key={index}
                onClick={() => HandleGetItem(item)}
            >
                <td className="border border-gray-400 pl-4 py-1">{index + 1}</td>
                <td className="border border-gray-400 pl-6 py-1">{item.mssv}</td>
                <td className="border border-gray-400 pl-6 py-1">{item.bsx}</td>
                <td className="border border-gray-400 pl-6 py-1">{item.timeIn}</td>
                <td className="border border-gray-400 pl-6 py-1">{item.timeOut}</td>
            </tr>
        );
    });

    return (
        <div className="flex justify-center baixe bg-gray-100">
            <div className="container flex items-center">
                <div className="w-7/12" style={{ "overflowY": "auto", "height": "450px" }}>
                    <table className="border-separate border-2 border-gray-500">
                        <thead>
                            <tr className="">
                                <th className="sticky top-0 border border-gray-400 px-2 py-2 text-gray-800 bg-white" style={{ "zIndex": "999" }}>STT</th>
                                <th className="sticky top-0 border border-gray-400 px-2 py-2 text-gray-800 bg-white">Mã Số Sinh Viên</th>
                                <th className="sticky top-0 border border-gray-400 px-2 py-2 text-gray-800 bg-white">Biển Số Xe</th>
                                <th className="sticky top-0 border border-gray-400 px-2 py-2 text-gray-800 w-48 bg-white">Time In</th>
                                <th className="sticky top-0 border border-gray-400 px-2 py-2 text-gray-800 w-48 bg-white">Time Out</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-200">
                                <td className="border border-gray-400 px-4 py-2"></td>
                                <td className="border border-gray-400 px-2 py-1">
                                    <input type="text"
                                        name="filterID"
                                        value={filter.filterID}
                                        onChange={HandleChangeFilter}
                                        className="w-full border-2 rounder-md p-1 pl-2" />
                                </td>
                                <td className="border border-gray-400 px-2 py-1">
                                    <input type="text"
                                        name="filterBSX"
                                        value={filter.filterBSX}
                                        onChange={HandleChangeFilter}
                                        className="w-full border-2 rounder-md p-1 pl-2" />
                                </td>
                                <td className="border border-gray-400 px-2 py-2">
                                    <input type="text"
                                        name="filterTimeIn"
                                        value={filter.filterTimeIn}
                                        onChange={HandleChangeFilter}
                                        className="w-full border-2 rounder-md p-1 pl-2" />
                                </td>
                                <td className="border border-gray-400 px-2 py-2">
                                    <input type="text"
                                        name="filterTimeOut"
                                        value={filter.filterTimeOut}
                                        onChange={HandleChangeFilter}
                                        className="w-full border-2 rounder-md p-1 pl-2" />
                                </td>
                            </tr>
                            {elmItem}
                        </tbody>
                    </table>
                </div>
                <div className="w-5/12 ml-2">
                    <div className="flex h-full border-2 border-gray-400 h-48 px-1 py-4 items-center">
                        <div className="w-5/12 p-2 ">
                            <div>
                                <div className="border border-gray-400 h-40 mb-2 ml-1 pt-1 shadow-md ">
                                    {showItem.imgIDCard !== "" && <img src={require(`../../img/${showItem.imgIDCard}`)} alt="" className="h-30" />}
                                </div>
                                <div className="border border-gray-400 h-40 ml-1 pt-1 shadow-md">
                                    {showItem.imgIDCard !== "" && <img src={require(`../../img/${showItem.imgCar}`)} alt="" />}
                                </div>
                            </div>
                        </div>
                        <div className="w-7/12">
                            <div className="flex items-center py-3 border border-gray-300 my-1">
                                <p className="w-5/12 pl-1 text-gray-600">Họ và tên:</p>
                                <p className="w-7/12 pl-2">{showItem.name}</p>
                            </div>
                            <div className="flex items-center py-3 border border-gray-300 my-1">
                                <p className="w-5/12 pl-1 text-gray-600">Mã số sinh viên:</p>
                                <p className="w-7/12 pl-2">{showItem.mssv}</p>
                            </div>
                            <div className="flex items-center py-3 border border-gray-300 my-1">
                                <p className="w-5/12 pl-1 text-gray-600">Ngày Sinh:</p>
                                <p className="w-7/12 pl-2">{showItem.date}</p>
                            </div>
                            <div className="flex items-center py-3 border border-gray-300 my-1">
                                <p className="w-5/12 pl-1 text-gray-600">Niên khóa:</p>
                                <p className="w-7/12 pl-2">{showItem.nienKhoa}</p>
                            </div>
                            <div className="flex items-center py-3 border border-gray-300 my-1">
                                <p className="w-5/12 pl-1 text-gray-600">Khoa:</p>
                                <p className="w-7/12 pl-2">{showItem.khoa}</p>
                            </div>
                            <div className="flex items-center py-3 border border-gray-300 my-1">
                                <p className="w-5/12 pl-1 text-gray-600">Thời gian gửi xe:</p>
                                <p className="w-7/12 pl-2">{showItem.timeIn}</p>
                            </div>
                            <div className="flex items-center py-3 border border-gray-300 my-1">
                                <p className="w-5/12 pl-1 text-gray-600">Biển số xe:</p>
                                <p className="w-7/12 pl-2">{showItem.bsx}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BaixePage;