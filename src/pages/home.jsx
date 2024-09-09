import React from "react";
import ReactHookForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import ThemContext from "../context/themeContext";

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
];

const Home = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <ThemContext.Consumer>
        {(value) => {
          return <p>{value?.theme}</p>;
        }}
      </ThemContext.Consumer>

      <ReactHookForm
        fields={fields}
        onSubmit={onSubmit}
        className="grid-cols-3"
      />
    </>
  );
};

export default Home;
