import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import { useEffect, useState } from 'react';

function CreatePost() {
    const token = localStorage.getItem('token');
    const [imageList, setImageList] = useState([]);
    const [imageLogicComplelte, setImageLogicComplelte] = useState(false);
    const [imageSrc, setImageSrc] = useState([]);
    const [text, setText] = useState('');
    const [hashtagInput, setHashtagInput] = useState('');
    const [hashtag, setHashtag] = useState([]);

    useEffect(() => {
        for (let i = 0; i < imageList.length; i++) {
            encodeFileToBase64(imageList[i]);
        }
        setImageLogicComplelte(true);
    }, [imageList]);
    useEffect(() => {}, [imageSrc]);
    useEffect(() => {}, [hashtag]);

    const resize = (e) => {
        setTimeout(() => {
            e.target.style.cssText = 'height:auto; padding:0';
            e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
        }, 0);
    };

    const onHashtagAddBtn = () => {
        if (hashtagInput.length === 0) return;
        for (let i = 0; i < hashtagInput.length; i++) {
            if (hashtagInput.charAt(i) === ' ') {
                alert('해쉬태그에는 공백이 들어갈 수 없습니다.');
                setHashtagInput('');
                return;
            }
        }
        handleHashtag();
    };

    const onHashtagRemoveBtn = (e) => {
        const target = e.target.innerText.substring(
            1,
            e.target.innerText.length
        );
        const hashtagList = [...hashtag];
        const index = hashtagList.indexOf(target);
        hashtagList.splice(index, 1);
        setHashtag(hashtagList);
    };

    const onHashtagChange = (e) => {
        setHashtagInput(e.target.value);
    };

    const onTextChange = (e) => {
        setText(e.target.value);
    };

    const onImageChange = (e) => {
        setImageLogicComplelte(false);
        if (e.target.files.length + imageSrc.length > 5) {
            alert('최대 5개의 파일까지만 업로드할 수 있습니다.');
            return;
        }
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleImageFiles(chosenFiles);
    };

    const handleHashtag = () => {
        const hashtagList = hashtag;
        let check = false;
        hashtagList.forEach((tag) => {
            if (tag === hashtagInput) {
                alert('같은 해시태그를 사용할 수 없습니다.');
                check = true;
                return;
            }
        });
        if (check) return;
        hashtagList.push(hashtagInput);
        setHashtagInput('');
        setHashtag(hashtagList);
    };

    const handleImageFiles = (files) => {
        const uploaded = [...imageList];
        if (uploaded.findIndex((f) => f.name === files.name) === -1) {
            uploaded.push(files[0]);
        }
        setImageList(uploaded);
    };

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                const src = [...imageSrc];
                src.push(reader.result);
                setImageSrc(src);
                resolve();
            };
        });
    };

    const submit = () => {
        if (imageList.length === 0) {
            alert('이미지는 필수 요소입니다.');
            return;
        }
        if (text.length === 0) {
            alert('내용은 필수 요소입니다.');
            return;
        }
        const formdata = new FormData();
        imageList.forEach((file) => formdata.append('files', file));
        hashtag.forEach((tag) => formdata.append('hashtag', tag));
        formdata.append('content', text);
        axios
            .post('http://localhost:8080/post/save', formdata, {
                headers: { Authorization: token },
            })
            .then((response) => {
                window.location.href = '/post';
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onHashtagEnter = (e) => {
        if (e.key === 'Enter' && e.nativeEvent.isComposing === false)
            onHashtagAddBtn();
    };

    return (
        <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                <div className="md:flex">
                    <div className="w-full">
                        <div className="flex justify-between items-center p-3">
                            <div className="flex flex-row items-center">
                                <img
                                    src="https://i.imgur.com/aq39RMA.jpg"
                                    className="rounded-full"
                                    width="40"
                                    alt="icon"
                                />
                                <div className="flex flex-row items-center ml-2">
                                    <span className="font-bold mr-1">
                                        Mautic War
                                    </span>
                                    <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                                </div>
                            </div>
                            <input
                                type="file"
                                id="uploadBtn"
                                hidden
                                accept="image/*"
                                onChange={onImageChange}
                            />
                            <label htmlFor="uploadBtn">
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="hover:text-gray-600 h-8 hover:cursor-pointer"
                                />
                            </label>
                        </div>

                        <div
                            id="carouselExampleCaptions"
                            className="carousel slide relative"
                            data-bs-ride="carousel"
                            data-bs-interval="false"
                        >
                            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                {imageLogicComplelte &&
                                    imageSrc.map((src) => {
                                        const index = imageSrc.indexOf(src);
                                        if (index === 0) {
                                            return (
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to={index}
                                                    className="active"
                                                    aria-current="true"
                                                    aria-label={`Slide ${
                                                        index + 1
                                                    }`}
                                                    key={index}
                                                ></button>
                                            );
                                        } else {
                                            return (
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleCaptions"
                                                    data-bs-slide-to={index}
                                                    aria-label={`Slide ${
                                                        index + 1
                                                    }`}
                                                    key={index}
                                                ></button>
                                            );
                                        }
                                    })}
                            </div>
                            <div className="carousel-inner relative w-full overflow-hidden">
                                {imageLogicComplelte &&
                                    imageSrc.map((src) => {
                                        console.log(imageSrc.indexOf(src));
                                        if (imageSrc.indexOf(src) === 0) {
                                            return (
                                                <div
                                                    className="carousel-item active relative float-left w-full"
                                                    key={imageSrc.indexOf(src)}
                                                >
                                                    <img
                                                        src={src}
                                                        className="block w-full max-w-lg bg-white"
                                                        alt="previous-img"
                                                    />
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className="carousel-item relative float-left w-full"
                                                    key={imageSrc.indexOf(src)}
                                                >
                                                    <img
                                                        src={src}
                                                        className="block w-full max-w-lg bg-white"
                                                        alt="previous-img"
                                                    />
                                                </div>
                                            );
                                        }
                                    })}
                            </div>
                            <button
                                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon inline-block bg-no-repeat"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon inline-block bg-no-repeat"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <div>
                                {hashtag.map((tag) => {
                                    const value = '@' + tag;
                                    return (
                                        <button
                                            type="button"
                                            className="text-blue-700 text-lg mr-2"
                                            key={value}
                                            onClick={onHashtagRemoveBtn}
                                        >
                                            {value}
                                        </button>
                                    );
                                })}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="hashtag 입력"
                                        className="text-blue-500 border mr-4"
                                        spellCheck="false"
                                        value={hashtagInput}
                                        onChange={onHashtagChange}
                                        onKeyDown={onHashtagEnter}
                                    />
                                    <button
                                        type="button"
                                        className="border bg-blue-600 hover:bg-blue-700 text-white px-2 rounded-lg mb-2"
                                        onClick={onHashtagAddBtn}
                                    >
                                        add
                                    </button>
                                    <textarea
                                        className="focus:bg-gray-200 w-full border h-max resize-none overflow-hidden"
                                        onChange={onTextChange}
                                        onKeyDown={resize}
                                        onKeyUp={resize}
                                        value={text}
                                        placeholder="내용을 입력해주세요."
                                        cols="50"
                                        spellCheck="false"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        className="border bg-green-500 rounded-lg text-white p-2 mb-1"
                        onClick={submit}
                    >
                        POST
                    </button>
                </div>
            </div>
        </>
    );
}
export default CreatePost;
