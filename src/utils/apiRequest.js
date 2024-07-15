import axios from "axios"

export const makeApiRequest = (token) =>{
    const instance = axios.create({
        baseURL:`${process.env.REACT_APP_URI}`,
        headers:{
            "Authorization":`bearer ${token}`
        }
    })
    return instance;
}