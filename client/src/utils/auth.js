import axios from 'axios'
import Router from '../router'

export const getToken = () => {
    return sessionStorage.getItem('token');
}

export const setToken = (token) => {
    sessionStorage.setItem('token', token);
}

export const register = async (userData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/users', userData);
        login(response.data.newUser.email, userData.password);
    } catch (err) {
        console.log(err);
    }
}

export const login = async (email, password) => {
    const loginData = {
        'email': email,
        'password': password 
    };

    try {
        const response = await axios.post('http://localhost:3000/api/v1/users/login', loginData);
        const token = response.data.token;
        sessionStorage.setItem('token', token);

        // redirect to user bookings 
        Router.push('/useraccount');
    } catch (err) {
        // handle errors like non-existing user 
        console.log(err);
    }
}

export const logout = () => {
    sessionStorage.clear();
    Router.push('/login');
}

