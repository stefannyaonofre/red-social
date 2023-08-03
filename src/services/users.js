import axios from "axios"
import { endpoints } from "./data"

export const getUsers = async() => {
    try {
        const { data } = await axios.get(endpoints.users)
        return data;
        
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getUser = async({email, password}) => {
    try {
        const { data } = await axios.get(endpoints.user(email, password));
        return data.length ? data[0] : null;
        
    } catch (error) {
        console.log(error);
        return null
    }
}

export const saveUsers = async() => {
    try {
        
    } catch (error) {
        
    }
}