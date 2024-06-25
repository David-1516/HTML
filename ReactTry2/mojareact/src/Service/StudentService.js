import axios from 'axios';

const http = axios.create({
  baseURL: "https://localhost:7096/swagger/index.html",  // Update the base URL to match your API
  headers: {
    "Content-type": "application/json"
  }
});

const createStudent = (data) => {
  return http.post("/Home/CreateStudent", data);
};

const getStudent = (id) => {
  return http.get(`/Home/GetStudent`, { params: { studentId: id } });
};

const updateStudent = (data) => {
  return http.put("/Home/UpdateStudent", data);
};

const deleteStudent = (id) => {
  return http.delete(`/Home/DeleteStudent`, { params: { studentId: id } });
};

const getStudents = (filtering, sorting, paging) => {
  return http.get("/Home/GetStudents", {
    params: {
      ...filtering,
      ...sorting,
      ...paging
    }
  });
};

const studentService = {
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  getStudents
};

export default studentService;
