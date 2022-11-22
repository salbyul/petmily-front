import axios from 'axios';
import { useState } from 'react';

function FindPassword() {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const onVerifyPasswordChange = (e) => {
        setVerifyPassword(e.target.value);
    };

    const onClick = (e) => {
        if (!validatePassword()) return;
        const data = {
            email: email,
            nickname: nickname,
            password: password,
        };
        axios
            .post('http://localhost:8080/find-password', data)
            .then((response) => {
                console.log(response);
                window.location.href = '/';
            })
            .catch((error) => {
                console.log(error);
                alert('이메일이나 닉네임을 올바르게 입력해주세요.');
            });
    };

    const validatePassword = () => {
        if (password !== verifyPassword) {
            alert('비밀번호가 같지 않습니다.');
            return false;
        }
        return true;
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full p-6 bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        비밀번호 변경
                    </h2>
                    <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                이메일
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="name@company.com"
                                value={email}
                                onChange={onEmailChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="nickname"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                닉네임
                            </label>
                            <input
                                type="text"
                                name="password"
                                id="nickname"
                                placeholder="nickname"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                value={nickname}
                                onChange={onNicknameChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                새로운 비밀번호
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                value={password}
                                onChange={onPasswordChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                비밀번호 확인
                            </label>
                            <input
                                type="password"
                                name="confirm-password"
                                id="confirm-password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                value={verifyPassword}
                                onChange={onVerifyPasswordChange}
                            />
                        </div>
                        <button
                            className="w-full text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            onClick={onClick}
                        >
                            Reset password
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FindPassword;
