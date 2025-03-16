import axios from "axios"

const BASE_URL = "http://localhost:5000/api/tasks"
export const getTodos=async () =>{
        try {
            const res= await axios.get(BASE_URL)
           return res
        } catch (error) {
            
        }
        
    }
export    const createTodo= async (body) => { 
        try {
            const res=await axios.post(BASE_URL, body)  
            console.log(res); 
                return res
        } catch (error) {
            
        }
    }
 export   const editeTodo= async (id ,body) => { 
        try {
            const res=await axios.put(`${BASE_URL}/${id}`,body) 
                return res
        } catch (error) {
            
        }
    }
export const deleteTodo= async (id) => { 
        try {
            const res=await axios.delete(`${BASE_URL}/${id}`) 
                return res
             
        } catch (error) {
            
        }
    }