import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Main from './routes/Main';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
