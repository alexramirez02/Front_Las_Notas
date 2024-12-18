interface Botonprops {
  text: string;
  darclick?: () => void;
}
const Button = ({ text, darclick = () => {} }: Botonprops) => {
  console.log("propos :", text);
  return (
    <button onClick={darclick} className=" button-primary  ">
      {" "}
      {text}{" "}
    </button>
  );
};
export { Button };
