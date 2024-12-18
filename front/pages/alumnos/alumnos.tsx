import React, { useEffect, useState } from "react";
import { Navegador } from "@/componentes/navegador";
import { Menunavegador } from "@/componentes/menunavegacion";
import axios from "axios";
import { UserActions } from "@/componentes/UserActions";
git add

const IndexAlumnos = () => {
  const [alumnos, setAlumnos] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para mostrar carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const obtenerAlumnos = async () => {
      setIsLoading(true); // Indica que se están cargando datos
      try {
        const options = {
          method: "GET",
          url: "http://localhost:4000/estudiantes",
          headers: { "Content-Type": "application/json" },
          timeout: 50000,
        };
        const respuesta = await axios.request(options);
        setAlumnos(respuesta.data);
      } catch (error) {
        console.error("Error al obtener los alumnos:", error);
        setError("Error al cargar datos"); // Mensaje de error para el usuario
      } finally {
        setIsLoading(false); // Indica que la carga ha finalizado
      }
    };
    obtenerAlumnos();
  }, []);

  return (
    // <main className="flex justify-center items-center flex-col w-full h-screen gap-6 p-12 ">
    <main className="justify-center">
      <Navegador title="Notas" description="Gestor" href="/" />
      <span className="flex justify-center items-center flex-col">
        Planilla Alumnos
      </span>

      <section className="flex justify-center items-center flex-col p-8 gap-5">
        {isLoading ? ( // Muestra mensaje de carga mientras se obtienen datos
          <p>Cargando datos...</p>
        ) : error ? ( // Muestra mensaje de error si ocurre un problema
          <p>Error: {error}</p>
        ) : (
          <table className="tabla">
            <thead>
              <tr className=" tr">
                <th className="th">Documento</th>
                <th className="th">Nombre</th>
                <th className="th">Apellido</th>
                <th className="th">Acciones </th>
              </tr>
            </thead>
            <tbody>
              {alumnos?.map((alumno) => (
                <tr key={alumno.Documento} className="tr">
                  <td className="td">{alumno.id}</td>
                  <td className="td">{alumno.nombre}</td>
                  <td className="td">{alumno.apellido}</td>
                  <td className="td">
                    {" "}
                    <UserActions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div></div>
      </section>
    </main>
  );
};

export default IndexAlumnos;
