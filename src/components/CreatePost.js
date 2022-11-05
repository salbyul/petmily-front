import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useEffect, useState } from 'react';

function CreatePost() {
    const token = localStorage.getItem('token');
    const [imageList, setImageList] = useState([]);
    const [imageLimit, setImageLimit] = useState(false);
    const [imageCount, setImageCount] = useState(0);
    const [imageSrc, setImageSrc] = useState([]);
    const [text, setText] = useState('');
    const [hastag, setHashtag] = useState([]);

    useEffect(() => {
        for (let i = 0; i < imageList.length; i++) {
            encodeFileToBase64(imageList[i]);
        }
    }, [imageList]);
    useEffect(() => {}, [imageSrc]);

    const onImageChange = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleImageFiles(chosenFiles);
    };

    const handleImageFiles = (files) => {
        const MAX_COUNT = 5;
        const uploaded = [...imageList];
        if (imageLimit === true) {
            alert('최대 5개의 파일까지만 업로드할 수 있습니다.');
            return;
        }
        files.some((file) => {
            if (uploaded.length === MAX_COUNT) {
                setImageLimit(true);
                alert('최대 5개의 파일까지만 업로드할 수 있습니다.');
            } else if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
            }
        });
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
                                multiple
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
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCaptions"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div className="carousel-inner relative w-full overflow-hidden">
                                {imageSrc &&
                                    imageSrc.map((src) => {
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
                                {/* <div className="carousel-item active relative float-left w-full">
                                    <img
                                        src="/assets/pawprint.png"
                                        className="block w-full max-w-lg bg-white"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item relative float-left w-full">
                                    <img
                                        src="/assets/login/login02.jpg"
                                        className="block w-full max-w-lg bg-white"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item relative float-left w-full">
                                    <img
                                        src="/assets/login/login03.jpg"
                                        className="block w-full max-w-lg bg-white"
                                        alt="..."
                                    />
                                </div> */}
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

                        <div className="p-4 flex justify-between items-center"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CreatePost;
