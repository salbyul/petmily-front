import axios from 'axios';
import { useEffect, useState } from 'react';
import MyPost from './MyPost';

function MyPostList() {
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
            .get('http://localhost:8080/post/my-post', {
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
            {loading && (
                <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                    {postList.length !== 0 &&
                        postList.map((post) => {
                            return (
                                <MyPost
                                    nickname={nickname}
                                    post={post}
                                    key={post.resourceList[0]}
                                />
                            );
                        })}
                </div>
            )}
        </>
    );
}
export default MyPostList;
