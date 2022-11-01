import { useDispatch, useSelector } from 'react-redux';
import { changePage, getPage } from '../slice/PageSlice';

function SidebarTabList({ d, subject }) {
    const dispatch = useDispatch();
    return (
        <>
            <li>
                <button
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    onClick={() => dispatch(changePage(subject))}
                >
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
                                d={d}
                            />
                        </svg>
                    </span>
                    <span>{subject}</span>
                </button>
            </li>
        </>
    );
}
export default SidebarTabList;
