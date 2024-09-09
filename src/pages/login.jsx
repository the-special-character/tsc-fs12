import React, { useEffect } from "react";
import { Button } from "../components/ui/button";
import ReactHookForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import { useNavigate } from "react-router-dom";
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
];

function Login() {
  const navigate = useNavigate();

  const onSubmit = async (data, form) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData || "Registration failed");
      }

      const result = await response.json();
      console.log("Registration successful:", result);
      localStorage.setItem("user", JSON.stringify(result));

      // Optionally, you can navigate to a success page or login page
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      form.setError("root", {
        type: "manual",
        message: error.message || "An error occurred during registration",
      });
    }
  };

  return (
    <>
      <ReactHookForm fields={fields} onSubmit={onSubmit} />
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
      <ThemContext.Consumer>
        {(value) => {
          return <p>{value.theme}</p>;
        }}
      </ThemContext.Consumer>
    </>
  );
}

export default Login;
