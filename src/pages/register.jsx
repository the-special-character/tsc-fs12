import React, { useState } from "react";
import { Button } from "../components/ui/button";
import CustomForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import FormSelect from "../components/form/Select";
import FormRadioGroup from "../components/form/RadioGroup";
import FormCheckboxGroup from "../components/form/CheckboxGroup";
import FormSlider from "../components/form/Slider";
import { useNavigate } from "react-router-dom";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const fields = [
  {
    component: FormInput,
    label: "Name",
    placeholder: "Enter Your Name",
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
    placeholder: "mhp219@gmail.com",
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
  // {
  //   component: FormInput,
  //   label: "Birth Date",
  //   placeholder: "Enter Your Birthdate",
  //   name: "birthDate",
  //   type: "date",
  //   defaultValue: "18",
  //   autoComplete: "bday",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Birth Date is mendatory..",
  //     },
  //   },
  // },
  // {
  //   component: FormSelect,
  //   label: "Gender",
  //   placeholder: "Select Gender",
  //   name: "gender",
  //   defaultValue: "",
  //   options: [
  //     {
  //       value: "male",
  //       text: "Male",
  //     },
  //     {
  //       value: "female",
  //       text: "Female",
  //     },
  //     {
  //       value: "other",
  //       text: "Other",
  //     },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Gender is mendatory..",
  //     },
  //   },
  // },
  // {
  //   component: FormRadioGroup,
  //   label: "Xyz",
  //   name: "xyz",
  //   defaultValue: "",
  //   options: [
  //     {
  //       value: "a",
  //       text: "A",
  //     },
  //     {
  //       value: "b",
  //       text: "B",
  //     },
  //     {
  //       value: "c",
  //       text: "C",
  //     },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Gender is mendatory..",
  //     },
  //   },
  // },
  // {
  //   component: FormCheckboxGroup,
  //   label: "Hobbies",
  //   name: "hobbies",
  //   defaultValue: [],
  //   options: [
  //     {
  //       value: "a",
  //       text: "A",
  //     },
  //     {
  //       value: "b",
  //       text: "B",
  //     },
  //     {
  //       value: "c",
  //       text: "C",
  //     },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Hobbies is mendatory..",
  //     },
  //   },
  // },
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
  // {
  //   component: FormSlider,
  //   label: "price",
  //   name: "price",
  //   defaultValue: [50, 70],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Password is mendatory..",
  //     },
  //   },
  // },
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
  
  const navigate = useNavigate();
 const onSubmit = async (data , form) => {
   
     try {
      const {confirmPassword, ...rest} = data;
      const res = await fetch(" http://localhost:3000/register",{
        method:"POST",
        body: JSON.stringify(rest),
        headers:{
          "Content-Type": "application/json",
          Accept:"application/json",
        },
      });
      const json = await res.json();
      if(!res.ok) throw new Error(json);
      console.log(json);
      navigate("/");        
     } catch (error) {

      form.setError("root" , {
        message:error.message } , false);
      console.log(error);
     }  
  
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
