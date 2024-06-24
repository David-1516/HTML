import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7096/swagger/Home",
  headers: {
    "Content-type": "application/json"
  }
});