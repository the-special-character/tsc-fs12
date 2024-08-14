import React from "react";
import { Button } from "../components/ui/button";
import CustomForm from "../components/form/customForm";
import FormInput from "../components/form/Input";
import FormSelect from "../components/form/Select";
import FormRadioGroup from "../components/form/RadioGroup";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const fields = [
  {
    component: FormInput,
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
    component: FormInput,
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
    component: FormInput,
    label: "Birth Date",
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
    component: FormSelect,
    label: "Gender",
    placeholder: "Select Gender",
    name: "gender",
    defaultValue: "",
    options: [
      {
        value: "male",
        text: "Male",
      },
      {
        value: "female",
        text: "Female",
      },
      {
        value: "other",
        text: "Other",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Gender is mendatory..",
      },
    },
  },
  {
    component: FormRadioGroup,
    label: "Xyz",
    name: "xyz",
    defaultValue: "",
    options: [
      {
        value: "a",
        text: "A",
      },
      {
        value: "b",
        text: "B",
      },
      {
        value: "c",
        text: "C",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Gender is mendatory..",
      },
    },
  },
  {
    component: FormInput,
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
    component: FormInput,
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
    console.log(data);
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
