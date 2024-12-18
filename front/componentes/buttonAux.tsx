interface Botonprops {
  text: string;
  darclick?: () => void;
  children: React.ReactNode;
}
const Button = ({ children, text, darclick = () => {} }: Botonprops) => {
  console.log("propos :", text);
  return (
    <button onClick={darclick} className=" button-primary  ">
      {" "}
      {children}{" "}
    </button>
  );
};
export { Button };
