interface navegadorcards {
  title?: string;
  description: string;
  href: string;
}
const Navegador = ({ title, description, href }: navegadorcards) => {
  return (
    <div>
      <a href={href}>
        <h2> {title} </h2>
        <samp> {description} </samp>
      </a>
    </div>
  );
};
export { Navegador };
