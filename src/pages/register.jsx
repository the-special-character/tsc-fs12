import React from "react";
import { Button } from "../components/ui/button";
import CustomForm from "../components/form/customForm";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const fields = [
  {
    label: "Name",
    placeholder: "Elon Musk",
    name: "name",
    defaultValue: "",
    autoComplete: "name",
    rules: {
      required: {
        value: true,
        message: "Name is mendatory..",
      },
    },
  },
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
    label: "birthDate",
    placeholder: "04/08/1987",
    name: "birthDate",
    type: "date",
    defaultValue: "18",
    autoComplete: "bday",
    rules: {
      required: {
        value: true,
        message: "Birth Date is mendatory..",
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
  {
    label: "Confirm Password",
    placeholder: "Confirm Password",
    name: "confirmPassword",
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

function Register() {
  const onSubmit = async (data) => {
    await wait(5000);
    console.log("data");
  };

  return (
    <>
      <CustomForm fields={fields} onSubmit={onSubmit} />

      <Button variant="outline" className="w-full">
        Register with Google
      </Button>
    </>
  );
}

export default Register;
