import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import MainRoute from './routes/MainRoute';
import FollowRoute from './routes/FollowRoute';
import ProfileRoute from './routes/ProfileRoute';
import Logout from './routes/Logout';
import NotificationRoute from './routes/NotificationRoute';
import PostRoute from './routes/PostRoute';
import CreatePostRoute from './routes/CreatePostRoute';

function App() {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                {!token ? (
                    <Route path="/" element={<Login />} />
                ) : (
                    <Route path="/" element={<MainRoute />} />
                )}
                <Route path="/post" element={<PostRoute />} />
                <Route path="/post/create" element={<CreatePostRoute />} />
                {/* TODO */}
                <Route path="/notification" element={<NotificationRoute />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/follow" element={<FollowRoute />} />
                <Route path="/profile" element={<ProfileRoute />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
}

export default App;
