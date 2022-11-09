import { useEffect, useState } from 'react';
import FriendModal from './FriendModal';
import ReactModal from 'react-modal';
import FriendList from './FriendList';
import axios from 'axios';

function Friend() {
    const token = localStorage.getItem('token');
    const [friendList, setFriendList] = useState([]);
    const [loadingFollow, setloadingFollow] = useState(false);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [followList, setFollowList] = useState([]);
    ReactModal.setAppElement('#root');
    const onChange = (e) => {
        setInput(e.target.value);
    };
    const onClick = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        let list = null;
        axios
            .get('http://localhost:8080/member/find-all', {
                headers: { Authorization: token },
                params: { target: input },
            })
            .then((response) => {
                list = response.data;
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {
                setFriendList(list);
            });
    }, [isOpen]);
    useEffect(() => {
        axios
            .get('http://localhost:8080/follow/find-all', {
                headers: { Authorization: token },
            })
            .then((response) => {
                console.log(response);
                const list = [];
                response.data.forEach((f) => list.push(f.targetMember));
                setFollowList(list);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        setloadingFollow(true);
        console.log(followList);
    }, [followList]);
    return (
        <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="w-full">
                        <div className="flex flex-row items-center p-2">
                            <form className="flex items-center">
                                <label
                                    htmlFor="simple-search"
                                    className="sr-only"
                                >
                                    Search
                                </label>
                                <div className="relative w-full">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                        placeholder="Search"
                                        required
                                        value={input}
                                        onChange={onChange}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-400 rounded-lg border border-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                    onClick={onClick}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>

                                <ReactModal
                                    isOpen={isOpen}
                                    onRequestClose={() => setIsOpen(false)}
                                    className="p-4 w-full max-w-md h-full md:h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                                >
                                    <FriendModal list={friendList} />
                                </ReactModal>
                            </form>
                        </div>
                        <FriendList />
                    </div>
                </div>
                {loadingFollow &&
                    followList.map((f) => {
                        return (
                            <a href={'/profile?m=' + f.nickname} key={f.id}>
                                <div className="flex flex-row items-center p-2 m-2 shadow">
                                    <img
                                        src="https://i.imgur.com/aq39RMA.jpg"
                                        className="rounded-full"
                                        width="40"
                                        alt="icon"
                                    />
                                    <div className="flex flex-row items-center ml-2">
                                        <span className="font-bold mr-1 pr-2">
                                            {f.nickname}
                                        </span>
                                        <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                                        <span className="text-gray-700">
                                            {f.statusMessage}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </>
    );
}
export default Friend;
