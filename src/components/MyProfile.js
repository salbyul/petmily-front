import axios from 'axios';
import { useEffect, useState } from 'react';

function MyProfile() {
    const token = localStorage.getItem('token');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');
    const [edit, setEdit] = useState(true);
    const [editedNickname, setEditedNickname] = useState('');
    const [editedStatusMessage, setEditedStatusMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:8080/member/my-detail', {
                headers: { Authorization: token },
            })
            .then((response) => {
                console.log(response);
                setNickname(response.data.nickname);
                setEditedNickname(response.data.nickname);
                setEmail(response.data.email);
                setStatusMessage(response.data.statusMessage);
                setEditedStatusMessage(response.data.statusMessage);
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const doEdit = () => {
        setEdit(!edit);
    };
    const cancel = () => {
        setEdit(!edit);
    };
    const submit = () => {};

    const onNicknameChange = (e) => {
        setEditedNickname(e.target.value);
    };

    const onStatusMessageChange = (e) => {
        setEditedStatusMessage(e.target.value);
    };

    return (
        <>
            {loading && (
                <div className="mx-auto bg-white shadow-lg rounded-md overflow-hidden">
                    <div className="h-full">
                        <div className="border-b-2 block md:flex">
                            <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                                <div className="flex justify-between">
                                    <span className="text-xl font-semibold block">
                                        {nickname}
                                    </span>
                                    {edit && (
                                        <button
                                            type="button"
                                            className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                                            onClick={doEdit}
                                        >
                                            수정
                                        </button>
                                    )}
                                    {!edit && (
                                        <button
                                            type="button"
                                            className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800"
                                            onClick={submit}
                                        >
                                            완료
                                        </button>
                                    )}
                                    {!edit && (
                                        <button
                                            type="button"
                                            className="-mt-2 text-md font-bold text-white bg-red-700 rounded-full px-5 py-2 hover:bg-red-800"
                                            onClick={cancel}
                                        >
                                            취소
                                        </button>
                                    )}
                                </div>
                                <div className="pb-4">
                                    {edit ? (
                                        <input
                                            disabled
                                            id="statusMessage"
                                            className="border-1 rounded-r px-4 py-2 w-full"
                                            type="text"
                                            value={statusMessage}
                                        />
                                    ) : (
                                        <input
                                            id="editedStatusMessage"
                                            className="border-1 rounded-r px-4 py-2 w-full"
                                            type="text"
                                            value={editedStatusMessage}
                                            onChange={onStatusMessageChange}
                                        />
                                    )}
                                </div>
                                <div className="w-full p-8 mx-2 flex justify-center">
                                    <img
                                        id="showImage"
                                        className="max-w-xs w-32 items-center border"
                                        src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                                <div className="rounded shadow p-6">
                                    <div className="pb-6">
                                        <label
                                            htmlFor="name"
                                            className="font-semibold text-gray-700 block pb-1"
                                        >
                                            Name
                                        </label>
                                        <div className="flex">
                                            {edit ? (
                                                <input
                                                    disabled
                                                    id="nickname"
                                                    className="border-1 rounded-r px-4 py-2 w-full"
                                                    type="text"
                                                    value={nickname}
                                                />
                                            ) : (
                                                <input
                                                    id="editedNickname"
                                                    className="border-1 rounded-r px-4 py-2 w-full"
                                                    type="text"
                                                    value={editedNickname}
                                                    onChange={onNicknameChange}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="pb-4">
                                        <label
                                            htmlFor="about"
                                            className="font-semibold text-gray-700 block pb-1"
                                        >
                                            Email
                                        </label>
                                        <input
                                            disabled
                                            id="email"
                                            className="border-1 rounded-r px-4 py-2 w-full"
                                            type="email"
                                            value={email}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default MyProfile;
