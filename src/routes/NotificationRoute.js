import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Notification from '../components/Notification';

function NotificationRoute() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <Sidebar />
            <div className="flex h-screen justify-center items-center">
                <Notification />
            </div>
        </>
    );
}
export default NotificationRoute;
