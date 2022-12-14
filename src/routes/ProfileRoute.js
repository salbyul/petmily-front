import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MyProfile from '../components/MyProfile';
import Profile from '../components/Profile';
import qs from 'qs';

function ProfileRoute() {
    const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    const target = query.m;
    return (
        <>
            <div>
                <Navbar />
            </div>
            <Sidebar />
            <div className="flex h-screen justify-center items-center">
                {!target && <MyProfile />}
                {target && <Profile target={target} />}
            </div>
        </>
    );
}
export default ProfileRoute;
