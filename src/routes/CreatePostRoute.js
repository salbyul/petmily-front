import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';

function CreatePostRoute() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <Sidebar />
            <div className="flex h-screen justify-center items-center">
                <CreatePost />
            </div>
        </>
    );
}
export default CreatePostRoute;
