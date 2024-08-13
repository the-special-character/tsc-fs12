import React from "react";
import { Button } from "../components/ui/button";
import CustomForm from "../components/form/customForm";

const fields = [
  {
    label: "Email",
    placeholder: "elon.musk@tesla.com",
    name: "email",
    type: "email",
    defaultValue: "",
    autoComplete: "email",
    rules: {
      required: {
        value: true,
        message: "Email is mendatory..",
      },
    },
  },

  {
    label: "Password",
    placeholder: "Strong Password",
    name: "password",
    type: "password",
    autoComplete: "new-password",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Password is mendatory..",
      },
    },
  },
];

function Login() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <CustomForm fields={fields} onSubmit={onSubmit} />
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
    </>
  );
}

export default Login;
