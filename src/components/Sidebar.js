import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SidebarTabList from './SidebarTabList';

function Sidebar() {
    const [nickname, setNickname] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const token = localStorage.getItem('token');

    const doPost = () => {
        window.location.href = '/post/create';
    };

    useEffect(() => {
        axios
            .get('http://localhost:8080/member', {
                headers: { Authorization: token },
            })
            .then((response) => {
                setNickname(response.data.nickname);
                setStatusMessage(response.data.statusMessage);
            })
            .catch((error) => {
                localStorage.clear();
                window.location.reload();
            });
    }, []);
    return (
        <>
            <div
                className="w-2/12 bg-white rounded p-3 shadow-lg h-screen fixed z-10 top-0 overflow-hidden"
                style={{ marginTop: '90px' }}
            >
                <div className="flex items-center space-x-4 p-2 mb-5">
                    <img
                        className="h-12 rounded-full"
                        src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                        alt={nickname}
                    />
                    <div>
                        <h4 className="font-semibold text-lg text-gray-700 font-poppins tracking-wide">
                            {nickname}
                        </h4>
                        <span className="text-sm tracking-wide flex items-center space-x-1">
                            <svg
                                className="h-4 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                            <span className="text-gray-600 text-sm">
                                {statusMessage}
                            </span>
                        </span>
                    </div>
                    <button type="button" onClick={doPost}>
                        <FontAwesomeIcon
                            icon={faSquarePlus}
                            className="hover:text-gray-600 h-8"
                        />
                    </button>
                </div>
                <ul className="space-y-2 text-sm">
                    <SidebarTabList
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        subject="??? ?????????"
                    />
                    <SidebarTabList
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        subject="??????"
                    />
                    <SidebarTabList
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        subject="?????????"
                    />
                    <SidebarTabList
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        subject="?????????"
                    />
                    <SidebarTabList
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        subject="??? ?????????"
                    />
                    <SidebarTabList
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        subject="??????"
                    />
                    <SidebarTabList
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        subject="????????????"
                    />
                </ul>
            </div>
            {/* <div className="min-h-screen flex flex-row bg-gray-100">
                    <div className="flex flex-col bg-white rounded-r-3xl overflow-hidden w-96">
                        <div className="flex items-center space-x-4 p-2 mb-5 shadow-md">
                            <img
                                className="h-12 rounded-full"
                                src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                                alt={nickname}
                            />
                            <div>
                                <h4 className="font-semibold text-lg text-gray-700 font-poppins tracking-wide">
                                    {nickname}
                                </h4>
                                <span className="text-sm tracking-wide flex items-center space-x-1">
                                    <svg
                                        className="h-4 text-green-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                    <span className="text-gray-600 text-sm">
                                        {statusMessage}
                                    </span>
                                </span>
                            </div>
                            <button type="button" onClick={doPost}>
                                <FontAwesomeIcon
                                    icon={faSquarePlus}
                                    className="hover:text-gray-600 h-8"
                                />
                            </button>
                        </div>
                        <ul className="flex flex-col py-4">
                            <SidebarTabList
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                subject="??? ?????????"
                            />
                            <SidebarTabList
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                subject="??????"
                            />
                            <SidebarTabList
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                subject="?????????"
                            />
                            <SidebarTabList
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                subject="??? ?????????"
                            />
                            <SidebarTabList
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                subject="??????"
                            />
                            <SidebarTabList
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                subject="????????????"
                            />
                        </ul>
                    </div>
                </div> */}
        </>
    );
}
export default Sidebar;
