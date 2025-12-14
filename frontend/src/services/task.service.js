import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api/tasks',
})

export const getTasks = () => api.get('/')
export const createTask = (data) => api.post('/', data)
export const updateTask = (id, data) => api.patch(`/${id}`, data)
export const deleteTask = (id) => api.delete(`/${id}`)
