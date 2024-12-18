import { type } from "os";

interface Inputprops {
  label: string;
  placeholder?: string;
  name: string;
  // capturaclick?: () => void |  ((event: React.ChangeEvent<HTMLInputElement>) => void);
  capturaclick?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  type?: "text" | "email" | "password" | "number";
}
const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  capturaclick = () => {},
}: Inputprops) => {
  return (
    <div className="flex flex-col ">
      <span> {label} </span>
      <input
        className="diseño-input"
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={capturaclick}
      />
    </div>
  );
};
export { Input };
