import axios from 'axios';

const API_URL = 'https://localhost:7096/swagger/index.html'; // Adjust the base URL as needed

const createStudent = async (studentData) => {
    try {
        const response = await axios.post(`${API_URL}/CreateStudent`, studentData);
        return response.data;
    } catch (error) {
        console.error('Error creating student:', error);
        throw error;
    }
};

const getStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/GetStudents`); // Ensure this route exists
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

const getStudent = async (studentId) => {
    try {
        const response = await axios.get(`${API_URL}/GetStudent`, {
            params: { studentId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching student:', error);
        throw error;
    }
};

const updateStudent = async (studentData) => {
    try {
        const response = await axios.put(`${API_URL}/UpdateStudent`, studentData);
        return response.data;
    } catch (error) {
        console.error('Error updating student:', error);
        throw error;
    }
};

const deleteStudent = async (studentId) => {
    try {
        const response = await axios.delete(`${API_URL}/DeleteStudent`, {
            params: { studentId }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting student:', error);
        throw error;
    }
};

export default {
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent,
};
