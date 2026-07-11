import axios from "axios"



const axiousInstance=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_BASE_URL
})

export const apicaller=async(method,url,body=null,headers={},params={})=>{
    try{
        const response=await axiousInstance({
            method,url,data:body,headers,params
        });
        return response

    }



    
    catch(error)
    {
        console.log("error found during apicalling",error);
        throw error;

        
    }
    
    



}