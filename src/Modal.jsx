import { useEffect, useState  } from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ status, closeModal ,selectedTodo,onSave }) => {
  const [title, setTitel] = useState();
  useEffect(() => {
    if(status ==="edite"){
        setTitel(selectedTodo.title)
    }
  }, [status,selectedTodo]);
  const handelSubmit=()=>{
    onSave({id:selectedTodo?.id,title:title})
  }
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-96 rounded-lg flex flex-col justify-center items-center p-6 shadow-lg">
        <IoClose
          onClick={() => closeModal()}
          className="ml-auto cursor-pointer"
        />
        <p>
          {status === "create"
            ? "create"
            : status === "edite"
            ? "edite"
            : "delete"}
        </p>

        {status !== "delete" && (
          <input
            className="w-full p-4 rounded-lg border border-gray-800"
            value={title}
            onChange={(e) => setTitel(e.target.value)}
          />
        )}
        {status === "delete" && <p>Are you sure delete?</p>}
        <div className="flex justify-center items-center gap-4 mt-2">
          <button
            onClick={closeModal}
            className="bg-amber-950 text-white p-2 rounded-lg w-[60px]"
          >
            cancel
          </button>
          <button onClick={handelSubmit} className="bg-amber-950 text-white p-2 rounded-lg w-[60px]">
            ok
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
