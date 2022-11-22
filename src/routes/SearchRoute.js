import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../components/Post';
import { useLocation } from 'react-router-dom';

function SearchRoute() {
    const token = localStorage.getItem('token');
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const input = location.state.input;
    useEffect(() => {
        console.log(input);
        axios
            .get(`http://localhost:8080/post/search?s=${input}`, {
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
                                    <Post nickname={post.author} post={post} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
export default SearchRoute;
