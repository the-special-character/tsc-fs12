import React from "react";
import { Button } from "../components/ui/button";
import CustomForm from "../components/form/customForm";
import FormInput from "../components/form/Input";
import FormRadioGroup from "../components/form/RadioGroup";
import FormCheckboxGroup from "../components/form/CheckboxGroup";
import FormDatePicker from "../components/form/FormDatePicker";
import FormComboBox from "../components/form/FormComboBox";

const fields = [
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
    component: FormDatePicker,
    label: "BirthDate",
    placeholder: "",
    name: "birthDate",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Password is mendatory..",
      },
    },
  },
  {
    component: FormRadioGroup,
    label: "Gender",
    name: "gender",
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
        message: "Password is mendatory..",
      },
    },
  },
  {
    component: FormCheckboxGroup,
    label: "Hobbies",
    name: "hobbies",
    defaultValue: [],
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
        message: "Password is mendatory..",
      },
    },
  },
  {
    component: FormComboBox,
    label: "Language",
    name: "language",
    defaultValue: "",
    options: [
      { text: "English", value: "en" },
      { text: "French", value: "fr" },
      { text: "German", value: "de" },
      { text: "Spanish", value: "es" },
      { text: "Portuguese", value: "pt" },
      { text: "Russian", value: "ru" },
      { text: "Japanese", value: "ja" },
      { text: "Korean", value: "ko" },
      { text: "Chinese", value: "zh" },
    ],
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
