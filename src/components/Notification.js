import NotificationList from './NotificationList';

function Notification() {
    return (
        <>
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="w-full">
                        <div className="flex flex-row items-center p-2">
                            <NotificationList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Notification;
