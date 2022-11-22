import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MyPost from '../components/MyPost';

function BookmarkRoute() {
    const token = localStorage.getItem('token');
    const [nickname, setNickname] = useState('');
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        axios
            .get('http://localhost:8080/member', {
                headers: { Authorization: token },
            })
            .then((response) => {
                setNickname(response.data.nickname);
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get('http://localhost:8080/bookmark/all', {
                headers: { Authorization: token },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    useEffect(() => {
        setLoading(true);
    }, [postList]);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <Sidebar />
            <div className="flex h-full">
                {/* <MyPostList /> */}
                <div className="mx-auto md:max-w-md">
                    {loading &&
                        postList.length !== 0 &&
                        postList.map((post) => {
                            return (
                                <div
                                    className="my-96 shadow-lg rounded-md"
                                    key={post.resourceList[0]}
                                >
                                    <MyPost nickname={nickname} post={post} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
export default BookmarkRoute;
