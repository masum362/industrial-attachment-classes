import {useFormStatus} from "react-dom";

const Button = () => {

   const {pending} = useFormStatus();
   
  return (
    <button
      type="submit"
      className={`text-white px-4 py-2 rounded max-w-md ${
        pending ? "bg-blue-200" : "bg-blue-500 hover:bg-blue-600"
      }`}
      disabled={pending}
    >
      {pending ? "Submitting" : "Submit"}
    </button>
  );
};

export default Button;
