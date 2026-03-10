import axios from 'axios';

// Configure Axios globally
const apiClient = axios.create({
  // Use VITE_API_URL or fallback to Render URL
  baseURL: import.meta.env.VITE_API_URL || 'https://cookie-backend-cfa3.onrender.com',
  withCredentials: true, // IMPORTANT: automatically sends cookies on cross-origin requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
