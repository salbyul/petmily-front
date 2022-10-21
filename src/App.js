import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Main from './routes/Main';
import SignUp from './routes/SignUp';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                {/* <Route path="/" element={<Main />} /> */}
                <Route path="/" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
