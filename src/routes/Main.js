import Navbar from '../components/Navbar';
import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';

function Main() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex h-screen items-center justify-center">
                <Sidebar />
                <PostList />
            </div>
        </>
    );
}
export default Main;
