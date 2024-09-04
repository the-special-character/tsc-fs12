import React from "react";
import ReactHookForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import FormRadioGroup from "../components/form/RadioGroup";
import FormTextArea from "../components/form/CustomTextArea";
import FormCheckboxGroup from "../components/form/CheckboxGroup";

const fields = [
  
  {
    component: FormInput,
    label:(
      <>
      FirstName <span className="text-green-500">*</span> 
      
      </>
      ),
    placeholder: "Enter Your FirstName",
    name: "First Name *",
    type: "text",
    
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "FirstName is mendatory..",
      },
    },
      
  },
  {
    component: FormInput,
    label:(
      <>
      LastName <span className="text-green-500">*</span> 
      
      </>
      ),
    placeholder: "Enter Your LastName",
    name: "LastName",
    type: "text",
    
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "LastName is mendatory..",
      },
    },
  },

  {
    component: FormInput,
    label:(
      <>
      Email <span className="text-green-500">*</span> 
      
      </>
      ),
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
    className:"col-span-full"
  },

  {
    component: FormRadioGroup,
    label:(
      <>
      Query Type <span className="text-green-500  grid-cols-2">*</span> 
      
      </>
      ),
    name: "Query Type",
    defaultValue: "",
    options: [
      {
        
        value: "General Enquiry",
        text: "General Enquiry",
      },
    
      {
        
        value: "Support Request",
        text: "Support Request",
      },
    
],



  
    rules: {
      required: {
        value: true,
        message: "QueryType  is mendatory..",
      },
    },
    className: "col-span-full",
    
  },


  {
    component: FormTextArea,
    label:(
      <>
      Message <span className="text-green-500">*</span> 
      
      </>
      ),
    placeholder: "Enter your message here...",
    name: "Message",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Message is mendatory..",
      },
    },
    className:"col-span-full"
  },

  {
    component: FormCheckboxGroup,
    label: "",
    name: "checkbox",
    defaultValue: [],
    options: [
      {
        value: "I Consent to Being Contacted By The Team",
        text: "I Consent to Being Contacted By The Team",
      },
      
    ],
    rules: {
      required: {
        value: true,
        message: "checkbox is mendatory..",
      },
    },
    className:"col-span-full"
  },
  
];

const Home = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="m-2">Contact Us</h1>
    <ReactHookForm
      fields={fields}
      onSubmit={onSubmit}
      className="grid-cols-2"
    />
    </div>
  );
};

export default Home;
