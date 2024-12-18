import { Input } from "@/componentes/input";
import { Button } from "@/componentes/button";
import { useState, useEffect } from "react";
import useFormData from "@/hooks/useFormData";
import { navegadorAuxiliar } from "@/componentes/NavegadorAuxiliar";
import Link from "next/link";
import { useNavigate } from "react-router-dom";
const planillaDocente = () => {
  const [correo, setcorreo] = useState("");
  const [documento, setdocumento] = useState("");
  const [contraseña, setcontraseña] = useState("");

  const { form } = useFormData();
  const CambioNota = () => {
    console.log(form);
  };

  useEffect(() => {
    console.log("corrreo de la funcion", correo);
    console.log("contraseña de  de la funcion", contraseña);
    console.log("documento de la funcion", documento);
  }, [correo, documento, contraseña]);
  //  var e = React.ChangeEvent<HTMLInputElement></HTMLInputElement>;

  // const capturacorreo = (e: React.ChangeEvent<HTMLInputElement>) => {
  //    console.log("correo capturado", e.target.value);
  //    setcorreo(e.target.value);
  //  };

  // const capturacontraseña = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("contraseña capturado", e.target.value);
  //   setcontraseña(e.target.value);
  // };
  // const capturadocumento = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("nombre capturado", e.target.value);
  //   // const pasardocumento = parseInt(e.target.value);
  //   // // Update the documento state with the parsed value
  //   // setdocumento(parsardocumento);
  //    setdocumento(e.target.value);
  // };
  const navigate = useNavigate();

  const doyclick = () => {
    console.log("di un clicl");
    console.log("el correo es", correo);
    console.log("el correo es", documento);
    console.log("el correo es", contraseña);
    navigate("/notas/original");
  };

  return (
    <main className="flex  items-center flex-col w-full h-scream overflow-y-auto">
      <span>Pagina Alumnos</span>

      <form ref={form} onChange={CambioNota}>
        <div className="flex flex-col items-center w-full h-full gap-4">
          <Input
            name="Correo"
            label="Correo"
            type="email"
            placeholder="Nombrecorreo@correo.com"
            capturaclick={(e: React.ChangeEvent<HTMLInputElement>) => {
              setcorreo(e.target.value);
            }}
          />
          <Input
            name="Documento"
            label="Documento"
            placeholder="Escribe el nombre"
            capturaclick={(e: React.ChangeEvent<HTMLInputElement>) => {
              setdocumento(e.target.value);
            }}
            type="number"
          />
          <Input
            name="Cntraseña"
            label="Contraseña"
            placeholder="Ingresa la contraseña"
            type="password"
            capturaclick={(e: React.ChangeEvent<HTMLInputElement>) => {
              setcontraseña(e.target.value);
            }}
          />
          <Button text="Iniciar sesion" darclick={doyclick} />
        </div>
      </form>
    </main>
  );
};
export default planillaDocente;
