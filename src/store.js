import { create } from 'zustand';
import { authService } from './api/authService';

const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null,

    login: async (username, password) => {
        try {
            const data = await authService.login(username, password);
            set({ user: data.user, isAuthenticated: true, error: null });
            return true;
        } catch (err) {
            set({ 
                error: err.response?.status === 401 
                    ? 'Incorrect username or password' 
                    : (err.response?.data?.detail || 'An error occurred during login')
            });
            return false;
        }
    },

    logout: async () => {
        try {
            await authService.logout();
        } catch (err) {
            console.error('Logout API failed', err);
        } finally {
            set({ user: null, isAuthenticated: false, error: null });
        }
    },

    fetchUser: async () => {
        set({ loading: true, error: null });
        try {
            const user = await authService.getCurrentUser();
            set({ user, isAuthenticated: true });
        } catch (err) {
            set({ user: null, isAuthenticated: false, error: 'Not authorized or token expired' });
        } finally {
            set({ loading: false });
        }
    }
}));

export default useAuthStore;
