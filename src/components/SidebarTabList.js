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
            case '북마크':
                setPage('/bookmark');
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
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
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
                    <span className="text-sm font-medium">{subject}</span>
                </a>
            </li>
        </>
    );
}
export default SidebarTabList;
