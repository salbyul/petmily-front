import axios from 'axios';
import { useEffect, useState } from 'react';

function SignUp() {
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [verify, setVerify] = useState('');
    const [resultPasswordLength, setResultPasswordLength] = useState(true);
    const [resultVerifyPassword, setResultVerifyPassword] = useState(true);
    const [resultNicknameLength, setResultNicknameLength] = useState(true);
    const [resultVerifyEmail, setResultVerifyEmail] = useState(true);
    const [blankEmail, setBlankEmail] = useState(false);
    const [blankNickname, setBlankNickname] = useState(false);
    const [blankPassword, setBlankPassword] = useState(false);

    const nicknameMinLength = 5;
    const nicknameMaxLength = 15;
    const passwordMinLength = 8;
    const passwordMaxLength = 20;

    useEffect(() => {
        if (email !== '') {
            verifyEmail(email);
        }
    }, [email]);

    useEffect(() => {
        if (nickname !== '') {
            verifyNickname(nickname);
        }
    }, [nickname]);

    useEffect(() => {
        if (password !== '') {
            verifyPassword(password, verify);
        }
        if (password === '' && verify === '') {
            setResultVerifyPassword(true);
        }
    }, [password, verify]);

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onNicknameChange = (e) => {
        setNickname(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const onVerifyChange = (e) => {
        setVerify(e.target.value);
    };
    const onClick = () => {
        if (!verifyEmail(email)) return false;
        if (!verifyNickname(nickname)) return false;
        if (!verifyPassword(password, verify)) return false;
        axios
            .post('http://localhost:8080/join', {
                email: email,
                nickname: nickname,
                password: password,
            })
            .then((response) => {
                // TODO
                if (response.status === 200) {
                    window.location.href = 'http://localhost:3000/main';
                }
            })
            //TODO
            .catch((error) => {
                console.log(error);
            });
    };

    const verifyEmail = (email) => {
        if (checkBlank(email)) {
            setBlankEmail(true);
            return false;
        } else setBlankEmail(false);
        if (isEmail(email)) {
            setResultVerifyEmail(true);
            return true;
        } else {
            setResultVerifyEmail(false);
            return false;
        }
    };

    const verifyNickname = (nickname) => {
        if (
            nickname.length >= nicknameMinLength &&
            nickname.length <= nicknameMaxLength
        ) {
            setResultNicknameLength(true);
            if (checkBlank(nickname)) {
                setBlankNickname(true);
                return false;
            } else {
                setBlankNickname(false);
                return true;
            }
        } else {
            setResultNicknameLength(false);
            return false;
        }
    };

    const verifyPassword = (password, verify) => {
        if (
            password.length >= passwordMinLength &&
            password.length <= passwordMaxLength
        ) {
            setResultPasswordLength(true);
            if (password === verify) {
                setResultVerifyPassword(true);
                if (checkBlank(password)) {
                    setBlankPassword(true);
                    return false;
                } else {
                    setBlankPassword(false);
                    return true;
                }
            } else {
                setResultVerifyPassword(false);
                return false;
            }
        } else {
            setResultPasswordLength(false);
            return false;
        }
    };

    const checkBlank = (value) => {
        for (let i = 0; i < value.length; i++) {
            if (value.charAt(i) === ' ') return true;
        }
        return false;
    };

    const isEmail = (email) => {
        let existAt = false;
        let existDot = false;
        for (let i = 0; i < email.length; i++) {
            if (existAt && existDot) return true;
            if (existAt) {
                if (email.charAt(i) === '.') {
                    existDot = true;
                }
            }
            if (email.charAt(i) === '@') {
                if (!existAt) existAt = true;
                else return false;
            }
        }
        return false;
    };

    return (
        <>
            <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
                <div
                    className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
                    style={{ maxWidth: '1000px' }}
                >
                    <div className="md:flex w-full">
                        <div className="hidden md:block w-1/2 bg-slate-50 py-10 px-10">
                            <img src="assets/login/login02.jpg" alt="signup" />
                        </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-gray-900">
                                    회원가입
                                </h1>
                                {/* <p>Enter your information to register</p> */}
                            </div>
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label
                                            htmlFor="email"
                                            className="text-xs font-semibold px-1"
                                        >
                                            Email
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                            </div>
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="johnsmith@example.com"
                                                value={email}
                                                onChange={onEmailChange}
                                            />
                                        </div>
                                        {!resultVerifyEmail && (
                                            <h2 className="text-lg text-red-400">
                                                이메일 양식을 지켜주세요.
                                            </h2>
                                        )}
                                        {blankEmail && (
                                            <h2 className="text-lg text-red-400">
                                                이메일에는 공백을 입력할 수
                                                없습니다.
                                            </h2>
                                        )}
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label
                                            htmlFor="email"
                                            className="text-xs font-semibold px-1"
                                        >
                                            Nickname
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                            </div>
                                            <input
                                                id="nickname"
                                                type="text"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="john__07"
                                                value={nickname}
                                                onChange={onNicknameChange}
                                            />
                                        </div>
                                        {!resultNicknameLength && (
                                            <h2 className="text-lg text-red-400">
                                                닉네임 길이는 5 ~ 15 가
                                                유효합니다.
                                            </h2>
                                        )}
                                        {blankNickname && (
                                            <h2 className="text-lg text-red-400">
                                                닉네임에는 공백을 입력할 수
                                                없습니다.
                                            </h2>
                                        )}
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label
                                            htmlFor="password"
                                            className="text-xs font-semibold px-1"
                                        >
                                            Password
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                            </div>
                                            <input
                                                id="password"
                                                type="password"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="***********"
                                                value={password}
                                                onChange={onPasswordChange}
                                            />
                                        </div>
                                        {!resultPasswordLength && (
                                            <h2 className="text-lg text-red-400">
                                                비밀번호의 길이는 8 ~ 20이
                                                유효합니다.
                                            </h2>
                                        )}
                                        {blankPassword && (
                                            <h2 className="text-lg text-red-400">
                                                비밀번호에는 공백을 입력할 수
                                                없습니다.
                                            </h2>
                                        )}
                                        {!resultVerifyPassword && (
                                            <h2 className="text-lg text-red-400">
                                                비밀번호가 같지 않습니다.
                                            </h2>
                                        )}
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label
                                            htmlFor="verify"
                                            className="text-xs font-semibold px-1"
                                        >
                                            Password Verify
                                        </label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                            </div>
                                            <input
                                                id="verify"
                                                type="password"
                                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                                placeholder="***********"
                                                value={verify}
                                                onChange={onVerifyChange}
                                            />
                                        </div>
                                        {!resultVerifyPassword && (
                                            <h2 className="text-lg text-red-400">
                                                비밀번호가 같지 않습니다.
                                            </h2>
                                        )}
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button
                                            type="button"
                                            onClick={onClick}
                                            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                                        >
                                            회원가입
                                        </button>
                                        <a href="/">
                                            <button
                                                type="button"
                                                className="block w-full max-w-xs mt-2 mx-auto bg-red-500 hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold"
                                            >
                                                취소
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SignUp;
