import { useState,useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
const TodoList=() => {
    const[todo,setTodo]=useState([]);
    const[status,setStatus]=useState("create")
    const[showModal,setShowModal]=useState(false)
    const getTodos=async () =>{
        try {
            const res= await axios.get("http://localhost:5000/api/tasks")
            setTodo(res.data)
        } catch (error) {
            
        }
        
    }
    useEffect(() => {
        getTodos();
    }, []);

    const closeModal =() =>{
        setShowModal(false)
    }
    const showModalHandler= (st) => {
        setStatus(st)
        setShowModal(!showModal)
    }
    return(
        <>
        <div className="flex flex-col justify-center">
            <h1 className="text-center mt-2 mb-3 font-bold">Todo List</h1>
            <button onClick={() => showModalHandler("create")} className="mx-auto bg-blue-400 rounded-lg p-2 mb-3">create</button>
        </div>
        <div className="flex flex-col items-center bg-amber-200">
            {todo && todo.map((item,index) => 
                 <div className="flex justify-between items-center w-[500px] mt-2 bg-amber-800 p-4 rounded-lg">
                    <p>{item.title}</p>
                    <div className="gap-2 flex ">
                    <button onClick={() => showModalHandler("edite")} className="bg-amber-600 rounded-lg p-2 px-4">edite</button>
                    <button onClick={() => showModalHandler("delete")} className="bg-amber-600 rounded-lg p-2 px-">delete</button>
                    </div>
                </div>
            )}
            
        </div>
        {showModal && <Modal closeModal={closeModal} status={status}/>}
        </>
    )
}
export default TodoList;