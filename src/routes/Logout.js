import axios from 'axios';
import { useEffect } from 'react';

function Logout() {
    useEffect(() => {
        localStorage.clear();
        window.location.href = '/';
    });
}
export default Logout;
