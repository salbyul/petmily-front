import { useEffect, useState } from 'react';

function SidebarTabList({ d, subject }) {
    const [page, setPage] = useState('');
    useEffect(() => {
        switch (subject) {
            case '내 포스트':
                setPage('/post');
                break;
            case '알림':
                setPage('/notification');
                break;
            case '메시지':
                setPage('/messages');
                break;
            case '내 프로필':
                setPage('/profile');
                break;
            case '친구':
                setPage('/follow');
                break;
            case '로그아웃':
                setPage('/logout');
                break;
            default:
        }
    }, []);
    return (
        <>
            <li>
                <a
                    href={page}
                    className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
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
                </a>
            </li>
        </>
    );
}
export default SidebarTabList;
