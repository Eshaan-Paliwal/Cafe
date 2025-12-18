import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const getProjects = () => api.get('/projects');
export const getFeaturedProjects = () => api.get('/projects/featured');
export const getProjectById = (id) => api.get(`/projects/${id}`);
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.patch(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Contact API
export const submitContact = (data) => api.post('/contact', data);
export const getContactMessages = () => api.get('/contact');
export const deleteContactMessage = (id) => api.delete(`/contact/${id}`);
export const markMessageAsRead = (id, read) => api.patch(`/contact/${id}`, { read });

export default api;
