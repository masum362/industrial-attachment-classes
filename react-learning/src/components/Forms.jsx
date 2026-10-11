import { Eye, EyeOff } from "lucide-react";
import { useActionState, useState } from "react";
import { z } from "zod";
import Button from "./Button";

const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[0-9]/, "Password must contain a number"),
});

const initialState = { success: false, errors: {}, values: {} };

const ErrorText = ({ id, messages }) =>
  messages?.length ? (
    <p id={id} role="alert" className="mt-1 text-sm text-red-600">
      {messages[0]}
    </p>
  ) : null;

const Forms = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const registerUser = async (prevState, formData) => {
    const values = {
      name: formData.get("name") ?? "",
      email: formData.get("email") ?? "",
      password: formData.get("password") ?? "",
    };

    const result = registerSchema.safeParse(values);
    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
        // don't echo the password back
        values: { name: values.name, email: values.email,password: values.password, },
      };
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // await api call here

    return {
      success: true,
      errors: {},
      values: {
        name: values.name,
        email: values.email,
        password: values.password,
      },
    };
  };
  const [state, formAction, isPending] = useActionState(registerUser, {
    name: "",
    email: "",
    password: "",
  });

  const { errors, values } = state;

  console.log(state);
  return (
    <form action={formAction} className="flex flex-col gap-4 p-4 ">
      {/* name */}
      <div className="mb-4 flex flex-col max-w-md">
        <label htmlFor="name">Name:</label>
        <input
          className="border border-gray-300 rounded px-3 py-2"
          type="text"
          id="name"
          name="name"
          defaultValue={values?.name}
        />
        <ErrorText id="name-error" messages={errors?.name} />
      </div>

      {/* email */}
      <div className="mb-4 flex flex-col max-w-md">
        <label htmlFor="email">Email:</label>
        <input
          className="border border-gray-300 rounded px-3 py-2"
          type="email"
          id="email"
          name="email"
          defaultValue={values?.email}
        />
        <ErrorText id="name-error" messages={errors?.email} />
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
            defaultValue={values?.password}
          />

          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <Eye /> : <EyeOff />}
          </span>
        </div>
        <ErrorText id="name-error" messages={errors?.password} />
      </div>

      <Button />
    </form>
  );
};

export default Forms;
