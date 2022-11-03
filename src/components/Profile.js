import axios from 'axios';
import { useEffect, useState } from 'react';

function Profile({ target }) {
    const token = localStorage.getItem('token');
    const [nickname, setNickname] = useState(''); // input
    const [statusMessage, setStatusMessage] = useState(''); // input
    const [loading, setLoading] = useState(false); // 통신 완료 확인

    useEffect(() => {
        axios
            .get(`http://localhost:8080/member/my-detail?m=${target}`, {
                headers: { Authorization: token },
            })
            .then((response) => {
                setNickname(response.data.nickname);
                setStatusMessage(response.data.statusMessage);
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            {loading && (
                <div className="mx-auto bg-white shadow-lg rounded-md overflow-hidden">
                    <div className="text-center"></div>
                    <div className="h-full">
                        <div className="border-b-2 block md:flex">
                            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                                <div className="flex justify-between">
                                    <span className="text-xl font-semibold block">
                                        {nickname}
                                    </span>
                                </div>
                                <div className="pb-4">
                                    <span className="border-1 rounded-r px-4 py-2 w-full">
                                        {statusMessage}
                                    </span>
                                </div>
                                <div className="w-full p-8 mx-2 flex justify-center">
                                    <img
                                        id="showImage"
                                        className="max-w-xs w-32 items-center border"
                                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                                <div className="rounded shadow p-6">
                                    <div className="pb-6">
                                        <label
                                            htmlFor="name"
                                            className="font-semibold text-gray-700 block pb-1"
                                        >
                                            Name
                                        </label>
                                        <div className="flex">
                                            <input
                                                disabled
                                                id="nickname"
                                                className="border-1 rounded-r px-4 py-2 w-full"
                                                type="text"
                                                value={nickname}
                                            />
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <label
                                            htmlFor="about"
                                            className="font-semibold text-gray-700 block pb-1"
                                        >
                                            Email
                                        </label>
                                        <input
                                            disabled
                                            id="email"
                                            className="border-1 rounded-r px-4 py-2 w-full"
                                            type="email"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Profile;
