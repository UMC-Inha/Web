import axios from 'axios';

export const userRegister = async (data) => {
    const response = await axios.post('http://localhost:3000/auth/register', data);
    return response;
}

export const userLogin = async (data) => {
    const response = await axios.post('http://localhost:3000/auth/login', data);
    return response;
}

export const userLogout = async () => {
    const response = await axios.post('http://localhost:3000/auth/token/access');
    return response;
}

export const getUserInfo = async () => {
    const response = await axios.get('http://localhost:3000/user/me');
    return response;
}