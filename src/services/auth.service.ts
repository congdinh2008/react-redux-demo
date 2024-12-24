import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL + 'auth'
});


const login = async (data: any) => {
    const response = await api.post('/login', data);

    if (response) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userInformation', JSON.stringify(response.data.userInformation));
    }

    return response.data;
}

const register = async (data: any) => {
    const response = await api.post('/register', data);
    return response.data;
}

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInformation');
}

export const AuthService = {
    login,
    register,
    logout
};