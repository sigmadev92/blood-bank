 
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
        authorization : localStorage.getItem("Token")
    }})

   
    
    return response.data;
}

export const GetOrgs = async(value)=>{
    const response = await axios.get("http://localhost:4000/api/users/get-all-orgs",{
        headers:{
            authorization : localStorage.getItem("Token"),
            userType : value
        }
    });
    return response.data;

};

export const InventoryForDonors = async()=>{
    const response = await axios.get("http://localhost:4000/api/users/inventory-for-donors",{
        headers : {
            authorization : localStorage.getItem("Token")
        }
    })
    return response.data;
}
export const InventoryForHospitals = async()=>{
    const response = await axios.get("http://localhost:4000/api/users/inventory-for-hosps",{
        headers : {
            authorization : localStorage.getItem("Token")
        }
    })
    return response.data;
}
