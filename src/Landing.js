import React, { useState } from 'react';
import NotFound from './NotFound';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function Test() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLogin = () => {
        // Simulate successful login (replace with your actual authentication logic)
        sessionStorage.setItem('isAuthenticated', 'true');
        setIsAuthenticated(true);
    };
    const handleLogout = () => {
        sessionStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/login"
                    element={
                        !isAuthenticated ? (<LoginPage onLogin={handleLogin} />) : (<Navigate to="/" replace />)
                    } />
                <Route path="/"
                    element={isAuthenticated ? (<Home onLogout={handleLogout} />) : (<Navigate to="/login" replace />
                    )}
                />
                <Route path="*" element={<NotFound />} />

                {/* Add other protected routes here */}
            </Routes>
        </Router>
    );
}


function LoginPage({ onLogin }) {
    // Login form logic here
    return (
        <div>
            <h1>Login</h1>
            <button onClick={onLogin}>Login</button>
        </div>
    );
}


function Home({ onLogout }) {
    return (
        <div>
            <h1>Home</h1>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default Test;









