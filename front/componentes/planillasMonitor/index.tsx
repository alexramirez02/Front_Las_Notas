import React, { useEffect, useState } from "react";
import { Navegador } from "@/componentes/navegador";
import { Menunavegador } from "@/componentes/menunavegacion";
import axios from "axios";

const planillasMonitor = () => {
  return (
    <main className="  flex  justify-center items-center  flex-col w-full h-screen text-center ">
      <span>Sistema de Notas</span>
      <div>
        <Menunavegador />
      </div>
    </main>
  );
};
export default planillasMonitor;
