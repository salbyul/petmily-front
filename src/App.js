import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './routes/Login';
import Main from './routes/Main';
import SignUp from './routes/SignUp';

function App() {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <Routes>
                {!token ? (
                    <Route path="/" element={<Login />} />
                ) : (
                    <Route path="/" element={<Main />} />
                )}
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/" element={<Navbar />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
