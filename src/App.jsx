import React, { useEffect } from 'react';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';
import useAuthStore from './store';

function App() {
    const { isAuthenticated, fetchUser, loading } = useAuthStore();

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <header style={{ backgroundColor: '#f1f1f1', padding: '10px 20px', textAlign: 'center' }}>
                <h1>Cross-Domain Authentication Demo</h1>
            </header>

            <main>
                {isAuthenticated ? (
                    <ProtectedPage />
                ) : (
                    <Login />
                )}
            </main>

            <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '12px', color: '#888' }}>
                <p>Ensure API URL and Origins are configured for cross-site cookie settings!</p>
            </footer>
        </div>
    );
}

export default App;
