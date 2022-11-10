import {
    faBookmark,
    faHeart as unLike,
    faComment,
} from '@fortawesome/free-regular-svg-icons';
import { faHeart as like } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Post({ nickname, post }) {
    const token = localStorage.getItem('token');
    const [imageList, setImageList] = useState([]);
    const [hashtagList, setHashtagList] = useState([]);
    const [postId, setPostId] = useState(-100);
    const [isLike, setIsLike] = useState(false);
    useEffect(() => {
        setImageList(post.resourceList);
        setHashtagList(post.hashtagList);
        setPostId(post.id);
        setIsLike(post.isLike);
        console.log(postId);
    }, []);

    const onLikeBtn = () => {
        const data = { postId: postId };
        if (isLike === false) {
            axios
                .post('http://localhost:8080/like/like', data, {
                    headers: { Authorization: token },
                })
                .then((response) => {
                    console.log(response);
                    setIsLike(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (isLike === true) {
            axios
                .post('http://localhost:8080/like/unlike', data, {
                    headers: { Authorization: token },
                })
                .then((response) => {
                    console.log(response);
                    setIsLike(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <>
            {
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
                                        {post.author}
                                    </span>
                                </div>
                            </div>
                            <div className="pr-2">
                                <FontAwesomeIcon
                                    icon={faEllipsis}
                                    className="text-gray-400 hover:cursor-pointer hover:text-gray-600"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div
                                    id="carouselExampleCaptions"
                                    className="carousel slide relative"
                                    data-bs-ride="carousel"
                                    data-bs-interval="false"
                                >
                                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                        {imageList.map((src) => {
                                            const index =
                                                imageList.indexOf(src);
                                            console.log(index);
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
                                        {imageList.map((src) => {
                                            console.log(imageList.indexOf(src));
                                            if (imageList.indexOf(src) === 0) {
                                                return (
                                                    <div
                                                        className="carousel-item active relative float-left w-full"
                                                        key={imageList.indexOf(
                                                            src
                                                        )}
                                                    >
                                                        <img
                                                            src={`data:image/jpeg;base64,${src}`}
                                                            className="block w-full max-w-lg bg-white"
                                                            alt="previous-img"
                                                        />
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div
                                                        className="carousel-item relative float-left w-full"
                                                        key={imageList.indexOf(
                                                            src
                                                        )}
                                                    >
                                                        <img
                                                            src={`data:image/jpeg;base64,${src}`}
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
                                        <span className="visually-hidden">
                                            Next
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <div className="flex flex-row items-center">
                                <button type="button" onClick={onLikeBtn}>
                                    {isLike ? (
                                        <FontAwesomeIcon
                                            icon={like}
                                            className="hover:text-red-500 mr-2 text-red-400"
                                        />
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={unLike}
                                            className="hover:text-gray-600 mr-2"
                                        />
                                    )}
                                </button>
                                <FontAwesomeIcon
                                    icon={faComment}
                                    className="hover:text-gray-600 mr-2"
                                />
                                {/* <FontAwesomeIcon
                                icon={faPaperPlane}
                                className="hover:text-gray-600 mr-2"
                            /> */}
                            </div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="hover:text-gray-600"
                                />
                            </div>
                        </div>
                        <div className="p-4 flex items-center">
                            {hashtagList.map((hashtag) => {
                                const value = '@' + hashtag;
                                return (
                                    <button
                                        type="button"
                                        className="text-blue-700 text-lg mr-2"
                                        key={hashtag}
                                    >
                                        {value}
                                    </button>
                                );
                            })}
                        </div>
                        <div>
                            <p className="break-words pl-4 text-lg text-gray-800">
                                {post.content}
                            </p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default Post;
