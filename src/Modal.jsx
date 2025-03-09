import { IoClose } from "react-icons/io5";

const Modal= ({status, closeModal}) => {
    return(
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            
            <div className="bg-white w-96 rounded-lg flex flex-col justify-center items-center p-6 shadow-lg">
                <IoClose onClick={() => closeModal()} className="ml-auto cursor-pointer"/>
                <p>{status === "create" ? "create" : status === "edite" ? "edite" : "delete"}</p>

            </div>
        </div>
    )
}
export default Modal;