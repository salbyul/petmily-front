import Navbar from '../components/Navbar';
import Firend from '../components/Friend';
import Sidebar from '../components/Sidebar';

function FollowRoute() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <Sidebar />
            <div className="flex h-screen items-center justify-center">
                <Firend />
            </div>
        </>
    );
}
export default FollowRoute;
