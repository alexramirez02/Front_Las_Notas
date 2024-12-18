import React, { useEffect, useState } from "react";
import { Navegador } from "@/componentes/navegador";
import { Menunavegador } from "@/componentes/menunavegacion";
import axios from "axios";

const Index = () => {
  const [data, setData] = useState<null | any>(null);

  useEffect(() => {
    axios
      //.get("https://fakestoreapi.com/products")
      .get("http://localhost:4000/notas")
      .then((res) => setData(res))
      .catch((e) => console.log("detectando el error", e));
  }, []);

  return (
    <main className=" debug flex  justify-center items-center  flex-col w-full h-screen text-center ">
      <span>Sistema de Notas</span>
      <div className="debug">
        <Menunavegador />
      </div>
      {data && <div>{JSON.stringify(data)}</div>}
      {!data && <div>Cargando</div>}
      {/* <div className="flex gap-7">
        <Navegador
          title="Docentes"
          description="Gestion de Docentes"
          href="/docentes"
        />
        <Navegador
          title="Alumnos"
          description="Gestion de Alumnos"
          href="/alumnos"
        />
        <Navegador
          title="Notas"
          description="Gestion de Notas"
          href="/notas"
        />
      </div> */}
    </main>
  );
};
export default Index;
