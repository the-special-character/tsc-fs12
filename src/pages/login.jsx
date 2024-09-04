import React from "react";
import { Button } from "../components/ui/button";
import ReactHookForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import FormRadioGroup from "../components/form/RadioGroup";
import FormCheckboxGroup from "../components/form/CheckboxGroup";
import FormDatePicker from "../components/form/FormDatePicker";
import FormComboBox from "../components/form/FormComboBox";
import FormOTP from "../components/form/FormOTP";
import FormTextArea from "../components/form/CustomTextArea";
import { useNavigate } from "react-router-dom";
import { Image } from "lucide-react";

const fields = [
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
  //   component: FormTextArea,
  //   label: "Details",
  //   placeholder: "Enter your message here...",
  //   name: "details",
  //   defaultValue: "",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Details is mendatory..",
  //     },
  //   },
  // },
  // {
  //   component: FormOTP,
  //   label: "One time Password",
  //   name: "otp",
  //   defaultValue: "",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Form OTP  is mendatory..",
  //     },
  //   },
  // },
  // {
  //   component: FormDatePicker,
  //   label: "BirthDate",
  //   placeholder: "",
  //   name: "birthDate",
  //   defaultValue: "",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Enter Your Birthdate  is mendatory..",
  //     },
  //   },
  // },
  // {
  //   component: FormRadioGroup,
  //   label: "Gender",
  //   name: "gender",
  //   defaultValue: "",
  //   options: [
  //     {
  //       value: "male",
  //       text: "Male",
  //     },
  //     {
  //       value: "Female",
  //       text: "Female",
  //     },
  //     {
  //       value: "Other",
  //       text: "Other",
  //     },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Gender  is mendatory..",
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
  //       value: "Drawing",
  //       text: "Drawing",
  //     },
  //     {
  //       value: "Computer Programming",
  //       text: "Computer Programming",
  //     },
  //     {
  //       value: "Web Design",
  //       text: "Web Design",
  //     },
 
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Hobbies is Mendatory ",
  //     },
  //   },
  // },
  // {
  //   component: FormComboBox,
  //   label: "Language",
  //   name: "language",
  //   defaultValue: "",
  //   options: [
  //     { text: "English", value: "en" },
  //     { text: "French", value: "fr" },
  //     { text: "German", value: "de" },
  //     { text: "Spanish", value: "es" },
  //     { text: "Portuguese", value: "pt" },
  //     { text: "Russian", value: "ru" },
  //     { text: "Japanese", value: "ja" },
  //     { text: "Korean", value: "ko" },
  //     { text: "Chinese", value: "zh" },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Select a language in combo box  is mendatory..",
  //     },
  //   },
  // },
];

function Login() {
  const navigate = useNavigate();
  const onSubmit = async (data , form) => {
   
    try {
     
     const res = await fetch(" http://localhost:3000/login",{
       method:"POST",
       body: JSON.stringify(data),
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
      <ReactHookForm
        fields={fields}
        onSubmit={onSubmit}
        // className="grid-cols-2"
      />
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
    </>


  );
}

export default Login;
