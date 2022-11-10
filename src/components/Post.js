import {
    faBookmark,
    faHeart,
    faComment,
    faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

function Post({ nickname, post }) {
    const [imageList, setImageList] = useState([]);
    const [hashtagList, setHashtagList] = useState([]);
    useEffect(() => {
        setImageList(post.resourceList);
        setHashtagList(post.hashtagList);
        return () => {};
    }, []);

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
                                    <small className="h-1 w-1 bg-gray-300 rounded-full mr-1 mt-1"></small>
                                    {!(nickname === post.author) && (
                                        <a
                                            href="#!"
                                            className="text-blue-600 text-sm hover:text-blue-800"
                                        >
                                            Follow
                                        </a>
                                    )}
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
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    className="hover:text-gray-600 mr-2"
                                />
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
