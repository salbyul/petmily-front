import MyPostList from '../components/MyPostList';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function PostRoute() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex h-screen items-center justify-center">
                <Sidebar />
                <MyPostList />
            </div>
        </>
    );
}
export default PostRoute;
