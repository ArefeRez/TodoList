import { useState,useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import { createTodo, deleteTodo, editeTodo, getTodos } from "./services/todo";
const TodoList=() => {
    const[todo,setTodo]=useState([]);
    const[status,setStatus]=useState("create")
    const[showModal,setShowModal]=useState(false)
    const [selectTodo,setSelectTodo]=useState(null);

    const BASE_URL = "http://localhost:5000/api/tasks"

    const getDataTodos=async () =>{
        try {
            const res= await getTodos()
            setTodo(res.data)
        } catch (error) {
            
        }
        
    }
    useEffect(() => {
        getDataTodos();
    }, []);

    const closeModal =() =>{
        setShowModal(false)
    }
    const showModalHandler= (st , todo) => {
        setSelectTodo(todo)
        setStatus(st)
        setShowModal(!showModal)
    }
    const createDataTodo= async (todo) => { 
        
        console.log(todo); 
        try {
            const res=await createTodo(todo)  
            console.log(res); 
            if (res.status ===201) {
                setShowModal(!showModal)
               await getDataTodos()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const editeDataTodo= async (todo) => { 
    try {
        const res=await editeTodo(todo.id,todo) 
        if (res.status ===200) {
            setShowModal(!showModal)
            await getDataTodos()
        }  
    } catch (error) {
        
    }
}
const deleteDataTodo= async (todo) => { 
    try {
        const res=await deleteTodo(todo.id) 
        if (res.status ===200) {
            setShowModal(!showModal)
            await getDataTodos()
        }  
    } catch (error) {
        
    }
}
const handelSubmit= async (todo) =>{
    if (status === "create") {
       await createDataTodo(todo);
    }else if (status === "edite"){
       await editeDataTodo(todo)
    }else{
        deleteDataTodo(todo)
    }
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
                    <button onClick={() => showModalHandler("edite" ,item)} className="bg-amber-600 rounded-lg p-2 px-4">edite</button>
                    <button onClick={() => showModalHandler("delete" ,item)} className="bg-amber-600 rounded-lg p-2 px-">delete</button>
                    </div>
                </div>
            )}
            
        </div>
        {showModal && <Modal onSave={handelSubmit} selectedTodo={selectTodo} closeModal={closeModal} status={status}/>}
        </>
    )
}
export default TodoList;