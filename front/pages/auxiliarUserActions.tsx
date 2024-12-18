import { MdDelete, MdMode } from "react-icons/md";
import { Tooltip } from "@/componentes/Tooltip";

const auxiliarUserActions = () => {
  return (
    <div className=" flex  text-blue gap-9 ">
      <Tooltip description="escribe">
        <MdMode className="  hover:cursor-pointer " />
      </Tooltip>

      <Tooltip description="elimina">
        <MdDelete className="  hover:cursor-pointer " />
      </Tooltip>
    </div>
  );
};

export { auxiliarUserActions };
