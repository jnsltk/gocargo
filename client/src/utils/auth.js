import axios from 'axios'
import Router from '../router'

export const getToken = () => {
    return sessionStorage.getItem('token');
}

export const setToken = (token) => {
    sessionStorage.setItem('token', token);
}

export const decodeToken = (token) => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) { 
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export const register = async (userData) => {
    try {
        const response = await axios.post('http://localhost:3000/api/v1/users', userData);
        login(response.data.newUser.email, userData.password, 'User');
        
    } catch (err) {
        console.log(err);
        alert('This email has already been registered. Please select another email.');
    }
}

export const login = async (email, password, userType) => {
    const loginData = {
        'email': email,
        'password': password,
    };

    try {
        if(userType === 'User'){
            const response = await axios.post('http://localhost:3000/api/v1/users/login', loginData);
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            // redirect to user account 
            Router.push('/useraccount');
        }else if(userType === 'Manager'){
            const response = await axios.post('http://localhost:3000/api/v1/managers/login', loginData);
            const token = response.data.token;
            sessionStorage.setItem('token', token);
            Router.push('/manager');
        }
        
    } catch (err) {
        // handle errors like non-existing user 
        console.log(err);
        alert('Login failed. Please check your email and password.');
    }
}

export const logout = () => {
    sessionStorage.clear();
    Router.push('/login');
}

