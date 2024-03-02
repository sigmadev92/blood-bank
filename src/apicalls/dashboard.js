import axios from "axios";

export const fetchBloodDetails = async()=>{
    const response = await axios.get("http://localhost:4000/api/dashboardRoute/blood-groups-data",{
        headers : {authorization : localStorage.getItem("Token")}
    })
    return response.data;
}