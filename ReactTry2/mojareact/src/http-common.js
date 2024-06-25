import axios from 'axios';

const http = axios.create({
  baseURL: "https://localhost:7096/swagger/index.html",  // Update the base URL to match your API
  headers: {
    "Content-type": "application/json"
  }
});