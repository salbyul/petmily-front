import axios from 'axios';
import { useEffect, useState } from 'react';
import MyPost from './MyPost';

function MyPostList() {
    const token = localStorage.getItem('token');
    const [nickname, setNickname] = useState('');
    const [postList, setPostList] = useState({});
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
    });
    return (
        <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                <MyPost />
            </div>
        </>
    );
}
export default MyPostList;
