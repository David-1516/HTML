import axios from 'axios';

const BASE_URL = 'https://localhost:7096/api/Home';

const getStudents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/GetStudents`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the students!', error.response || error.message || error);
    throw error;
  }
};

const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/GetStudent`, { params: { studentId: id } });
    return response.data;
  } catch (error) {
    console.error(`There was an error fetching the student with ID ${id}!`, error.response || error.message || error);
    throw error;
  }
};

const createStudent = async (student) => {
  try {
    const response = await axios.post(`${BASE_URL}/CreateStudent`, student, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('There was an error creating the student!', error.response || error.message || error);
    throw error;
  }
};

const updateStudent = async (student) => {
  try {
    const response = await axios.put(`${BASE_URL}/UpdateStudent`, student, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('There was an error updating the student!', error.response || error.message || error);
    throw error;
  }
};

const deleteStudent = async (student) => {
  try {
    const response = await axios.delete(`${BASE_URL}/DeleteStudent`, student, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('There was an error deleting the student!', error.response || error.message || error);
    throw error;
  }
};
const StudentService = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};

export default StudentService;
