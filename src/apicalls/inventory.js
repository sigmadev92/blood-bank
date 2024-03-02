import axios from "axios";

export const AddInventory = async (values) => {
  const response = await axios.post(
    "http://localhost:4000/api/users/add",values,
    {
      headers:{
        authorization:localStorage.getItem("Token")
      }
    }
  );
  
   
  return response.data;
};
 
export const GetInventoryRecords = async() =>{
  
  const response = await axios.get("http://localhost:4000/api/users/get",{headers :{
    authorization : localStorage.getItem("Token"),
    
   
    
  }})
   
  return response.data;
};
export const GetDonorsOfOrg = async(value)=>{
   
  const response = await axios.get("http://localhost:4000/api/users/get-all-donors",{headers: {authorization: localStorage.getItem("Token")}})
   
  return response.data;
}

export const GetHospitalsOfOrg = async()=>{
   
  const response = await axios.get("http://localhost:4000/api/users/get-all-hospitals",{headers: {authorization: localStorage.getItem("Token")}})
  
  return response.data;
}

export const FetchBloodDetails = async(value)=>{
  const response = await axios.get(`http://localhost:4000/api/users/blood-details/${value}`,{
    headers : {
    authorization : localStorage.getItem("Token"),
    bloodGroup: value,
  }
   
})

  return response.data;
}