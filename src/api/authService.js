import apiClient from './axiosConfig';

export const authService = {
    login: async (username, password) => {
        const response = await apiClient.post('/login', { username, password });
        return response.data;
    },

    getCurrentUser: async () => {
        const response = await apiClient.get('/me');
        return response.data;
    },

    logout: async () => {
        const response = await apiClient.post('/logout');
        return response.data;
    }
};
