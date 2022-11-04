import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Notification from '../components/Notification';

function NotificationRoute() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="flex h-screen items-center justify-center">
                <Sidebar />
                <Notification />
            </div>
        </>
    );
}
export default NotificationRoute;
