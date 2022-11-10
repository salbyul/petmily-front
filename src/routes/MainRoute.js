import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Main() {
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
            .get('http://localhost:8080/post/all-post', {
                headers: { Authorization: token },
            })
            .then((response) => {
                console.log(response);
                setPostList(response.data);
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
                {/* <PostList /> */}
                <div className="mx-auto md:max-w-md">
                    <div className="my-96 shadow-lg rounded-md">
                        {loading &&
                            postList.length !== 0 &&
                            postList.map((post) => {
                                return (
                                    <div
                                        className="my-96 shadow-lg rounded-md"
                                        key={post.resourceList[0]}
                                    >
                                        <Post nickname={nickname} post={post} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;
