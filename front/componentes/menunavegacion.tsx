import { Navegador } from "./navegador";

const Menunavegador = () => {
  return (
    <div className="flex gap-7    ">
      <Navegador
        title="Lider 11"
        description="Gestion Monitor"
        href="/planillaMonitor"
      />
      {/* //<Navegador title="Notas" description="Gestion de Notas" href="/notas" /> */}
      <Navegador
        title="Docentes"
        description="Gestion Docente"
        href="/planillaDocente"
      />
    </div>
  );
};
export { Menunavegador };
