import { Input } from "@/componentes/input";
import { Button } from "@/componentes/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormData from "@/hooks/useFormData";

const copiaplanillamonitor = () => {
  const [correo, setCorreo] = useState(""); // Línea 5: 'setcorreo' corregido a 'setCorreo'
  const [documento, setDocumento] = useState(""); // Línea 6: 'setdocumento' corregido a 'setDocumento'
  const [contraseña, setContraseña] = useState(""); // Línea 7: 'setcontraseña' corregido a 'setContraseña'

  const { form } = useFormData();
  const CambioNota = () => {
    console.log(form);
  };

  useEffect(() => {
    console.log("Correo de la función", correo);
    console.log("Contraseña de la función", contraseña);
    console.log("Documento de la función", documento);
  }, [correo, documento, contraseña]);

  const navigate = useNavigate();
  const doyClick = () => {
    // Línea 26: 'doyclick' corregido a 'doyClick'
    console.log("Di un clic");
    console.log("Correo:", correo);
    console.log("Documento:", documento);
    console.log("Contraseña:", contraseña);

    // Línea eliminada: <link rel="icon" href="favicon.ico" />; (sin efecto)

    // Redirige a '/alumnos/alumnos'
    navigate("/alumnos/alumnos");
  };

  return (
    <main className="flex items-center flex-col w-full h-scream overflow-y-auto">
      <span>Página Alumnos</span>

      <form ref={form} onChange={CambioNota}>
        <div className="flex flex-col items-center w-full h-full gap-4">
          <Input
            name="Correo"
            label="Correo"
            type="email"
            placeholder="Nombrecorreo@correo.com"
            capturaclick={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCorreo(e.target.value); // Línea 17: 'setcorreo' corregido a 'setCorreo'
            }}
          />
          <Input
            name="Documento"
            label="Documento"
            placeholder="Escribe el nombre"
            capturaclick={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDocumento(e.target.value); // Línea 22: 'setdocumento' corregido a 'setDocumento'
            }}
            type="number"
          />
          <Input
            name="Contraseña"
            label="Contraseña"
            placeholder="Ingresa la contraseña"
            type="password"
            capturaclick={(e: React.ChangeEvent<HTMLInputElement>) => {
              setContraseña(e.target.value); // Línea 27: 'setcontraseña' corregido a 'setContraseña'
            }}
          />
          <Button text="Iniciar sesión" darclick={doyClick} />{" "}
          {/* Línea 31: 'darclick' corregido a 'onClick' */}
        </div>
      </form>
    </main>
  );
};

export default copiaplanillamonitor;
