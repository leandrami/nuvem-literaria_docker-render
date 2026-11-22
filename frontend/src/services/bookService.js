import axios from 'axios';

const api = axios.create({
  // Ordem de prioridade para descobrir o endereço da API:
  // 1) window.__ENV__: valor injetado pelo env.sh quando o contêiner liga (Render)
  // 2) import.meta.env: valor do .env no desenvolvimento local
  // 3) localhost: último recurso
  baseURL:
    window.__ENV__?.VITE_API_URL ||
    import.meta.env.VITE_API_URL ||
    'http://localhost:3001/api',
});

export const bookService = {
  async getAll() {
    const response = await api.get('/books');
    return response.data;
  },

  async getById(id) {
    const response = await api.get(`/books/${id}`);
    return response.data;
  },

  async create(bookData) {
    const response = await api.post('/books', bookData);
    return response.data;
  },

  async update(id, bookData) {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  },

  async remove(id) {
    await api.delete(`/books/${id}`);
  },
};

