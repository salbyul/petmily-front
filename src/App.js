import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './routes/Login';
import Main from './routes/Main';
import SignUp from './routes/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Route path="/" element={<Navbar />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
