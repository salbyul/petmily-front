import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Friend from '../components/Friend';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import PostList from '../components/PostList';
import MyProfile from '../components/MyProfile';
import Sidebar from '../components/Sidebar';
import { getPage } from '../slice/PageSlice';

function Main() {
    const [page, setPage] = useState('');
    const pageValue = useSelector(getPage);
    useEffect(() => {
        setPage(pageValue);
    }, [pageValue]);

    const state = {
        main: <PostList />,
        friend: <Friend />,
        notification: <Notification />,
        myProfile: <MyProfile />,
    };

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex h-screen items-center justify-center">
                <Sidebar />
                {state[page]}
            </div>
        </>
    );
}
export default Main;
