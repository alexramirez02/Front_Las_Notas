import { Navegador } from "../navegador";

const navegadorPrincipal = () => {
  return (
    <div className="flex gap-7    ">
      <Navegador
        title="Estudiantes"
        description="Gestion de Alumnos"
        href="/alumnos/alumnos"
      />
      {/* //<Navegador title="Notas" description="Gestion de Notas" href="/notas" /> */}
      <Navegador
        title="Notas"
        description="Ruta de Notas"
        href="/notas/original"
      />
    </div>
  );
};
export { navegadorPrincipal };
