import axios from 'axios';

const BASE_URL = 'https://localhost:7096/api/Home';

const getStudents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/GetStudents`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the students!', error);
    throw error;
  }
};

const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/GetStudent`, { params: { studentId: id } });
    return response.data;
  } catch (error) {
    console.error(`There was an error fetching the student with ID ${id}!`, error);
    throw error;
  }
};

const createStudent = async (student) => {
  try {
    const response = await axios.post(`${BASE_URL}/CreateStudent`, student);
    return response.data;
  } catch (error) {
    console.error('There was an error creating the student!', error);
    throw error;
  }
};

const updateStudent = async (student) => {
  try {
    const response = await axios.put(`${BASE_URL}/UpdateStudent`, student);
    return response.data;
  } catch (error) {
    console.error('There was an error updating the student!', error);
    throw error;
  }
};

// Naming the export object
const StudentService = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent
};

export default StudentService;
