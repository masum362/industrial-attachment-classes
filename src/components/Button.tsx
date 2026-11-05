import clsx from "clsx";

interface ButtonProps {
  text: string;
  style: string;
  handleClick?: () => void;
  type: "button" | "submit" | "reset";
}

// type ButtonProps = {
//   text: string;
//   style: string;
//   handleClick: () => void;
// };

const Button = ({ text, style, type }: ButtonProps) => {
  return (
    <button
      type={type ? type : "button"}
      className={clsx(
        "bg-blue-500 text-white px-4 py-2 rounded cursor-pointer",
        style,
      )}
    //   onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
