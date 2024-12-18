import { UserActions } from "@/componentes/UserActions";
import { MdDelete, MdMode } from "react-icons/md";

const Prueba = () => {
  return (
    <div className=" flex  gap-7 text-red-500 ">
      <span className="  hover:cursor-pointer">
        <MdMode />
      </span>
      <span className="  hover:cursor-pointer">
        <MdDelete />
      </span>
      <UserActions />
    </div>
  );
};
export default Prueba;
