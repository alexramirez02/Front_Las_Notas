import { Navegador } from "../navegador";

const navegadorAuxiliar = () => {
  return (
    <div className="flex gap-7    ">
      <Navegador
        title="Docentes  "
        description="Gestion de Docentes"
        href="/profes"
      />
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
export { navegadorAuxiliar };
