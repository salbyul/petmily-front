import Post from './Post';

function FeedList() {
    return (
        <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-md">
                <Post />
            </div>
        </>
    );
}
export default FeedList;
