import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Forms = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  }

  return (
    <form className="flex flex-col gap-4 p-4 " onSubmit={handleSubmit}>
      {/* name */}
      <div className="mb-4 flex flex-col max-w-md">
        <label htmlFor="name">Name:</label>
        <input
          className="border border-gray-300 rounded px-3 py-2"
          type="text"
          id="name"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
      </div>

      {/* email */}
      <div className="mb-4 flex flex-col max-w-md">
        <label htmlFor="email">Email:</label>
        <input
          className="border border-gray-300 rounded px-3 py-2"
          type="email"
          id="email"
          name="email"
          value={value.email}
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div className="mb-4 flex flex-col max-w-md">
        <label htmlFor="password">Password:</label>
        <div className="flex items-center border border-gray-300 rounded relative">
          <input
            className="border border-gray-300 rounded px-3 py-2 w-full"
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)}>
           {passwordVisible ? <Eye /> : <EyeOff /> }
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 max-w-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Forms;
