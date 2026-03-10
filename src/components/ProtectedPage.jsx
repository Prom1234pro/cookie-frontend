import React from 'react';
import useAuthStore from '../store';

const ProtectedPage = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = async () => {
        await logout();
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '40px auto', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h2 style={{ color: '#333' }}>Dashboard (Protected Content)</h2>

            <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '4px', margin: '20px 0' }}>
                <p style={{ margin: '5px 0' }}>Welcome back, <strong>{user?.username}</strong>!</p>
                <p style={{ margin: '5px 0' }}>Your secure User ID is: <code>{user?.id}</code></p>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '15px' }}>
                    This page is only visible because you have a valid, secure `HttpOnly` cookie containing your JWT token.
                </p>
            </div>

            <button
                onClick={handleLogout}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#ff4d4f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Sign Out
            </button>
        </div>
    );
};

export default ProtectedPage;
