 
import axios from "axios";
export const LoginUser = async(payload)=>{
    const response = await axios.post( "http://localhost:4000/api/users/login",payload)
       
    
    return response.data;
}
export const RegisterUser = async(payload)=>{
    const response = await axios.post("http://localhost:4000/api/users/register",payload);
    
    return response.data;
}

export const getCurrentUser = async()=>{
    const response = await axios.get("http://localhost:4000/api/users/get-current-user",{ headers :{
        authorization : localStorage.Token
    }})
    console.log(response.data);
    return response.data;
}

