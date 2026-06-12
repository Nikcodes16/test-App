import axios from "axios";

const BASE_URL = "https://ace.techugo.com:3005/api/v1";


const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});


api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NWJkOTZhNC0yZjk1LTQ1N2QtYjhkOC1mYTZmN2IyZWQxZjkiLCJlbWFpbCI6bnVsbCwicGhvbmVfbnVtYmVyIjoiNjM5MjU0MDM4NyIsImlhdCI6MTc4MTE3ODkxNCwiZXhwIjoxNzgxMjY1MzE0fQ.CNnQu09WSLijhfqmQjR1cC6hvPajQeFaQa1Ix-I2GUA"; 

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;