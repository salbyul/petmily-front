import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';

function CreatePostRoute() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex h-screen items-center justify-center">
                <Sidebar />
                <CreatePost />
            </div>
        </>
    );
}
export default CreatePostRoute;
