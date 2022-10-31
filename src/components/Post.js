import {
    faBookmark,
    faHeart,
    faComment,
    faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Feed() {
    return (
        <>
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
                                <a
                                    href="#!"
                                    className="text-blue-600 text-sm hover:text-blue-800"
                                >
                                    Follow
                                </a>
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
                        <img
                            src="/assets/pawprint.png"
                            className="w-full h-75"
                            alt="content"
                        />
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
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                                className="hover:text-gray-600 mr-2"
                            />
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faBookmark}
                                className="hover:text-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Feed;
