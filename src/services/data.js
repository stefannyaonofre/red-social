export const URL = 'http://localhost:3000/';

export const endpoints = {
    users: `${URL}users`,
    user: (email, password) => `${URL}users?email=${email}&password=${password}`
}