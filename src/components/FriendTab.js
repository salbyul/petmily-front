function FriendTab([nickname]) {
    return (
        <>
            <div className="flex flex-row items-center p-2">
                <img
                    src="https://i.imgur.com/aq39RMA.jpg"
                    className="rounded-full"
                    width="40"
                    alt="icon"
                />
                <div className="flex flex-row items-center ml-2">
                    <span className="font-bold mr-1 pr-2">Mautic War</span>
                    <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                    <span className=" text-gray-500 mr-1 px-2">
                        Status Message
                    </span>
                    <button className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline border">
                        <span className="text-gray-600">
                            <svg
                                className="h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                />
                            </svg>
                        </span>
                        <span>메시지</span>
                    </button>
                    <button className="text-blue-600 text-sm hover:text-blue-800 mx-2">
                        Unfollow
                    </button>
                </div>
            </div>
        </>
    );
}
export default FriendTab;
