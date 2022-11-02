import FindFriendList from './FindFriendList';

function FriendModal({ list }) {
    return (
        <>
            <div className="relative bg-white rounded-lg shadow">
                <div className="py-4 px-6 rounded-t border-b ">
                    <h3 className="text-base font-semibold text-gray-900 lg:text-xl ">
                        친구 찾기
                    </h3>
                </div>
                <div className="p-6">
                    <p className="text-sm font-normal text-gray-500">
                        찾으시는 친구가 맞나요?
                    </p>
                    {/* <ul className="my-4 space-y-3">
                        <li>
                            <a
                                href="#!"
                                className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow"
                            >
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                    MetaMask
                                </span>
                                <span className="inline-flex items-center justify-center px- 2py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded">
                                    Popular
                                </span>
                            </a>
                        </li>
                    </ul> */}
                    <FindFriendList list={list} />
                </div>
            </div>
        </>
    );
}
export default FriendModal;
