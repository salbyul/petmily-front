import Navbar from '../components/Navbar';
import Firend from '../components/Friend';
import Sidebar from '../components/Sidebar';

function FollowRoute() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex h-screen items-center justify-center">
                <Sidebar />
                <Firend />
            </div>
        </>
    );
}
export default FollowRoute;
