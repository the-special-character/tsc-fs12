import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./Input";
import { Button } from "../ui/button";

const CustomForm = ({ fields, onSubmit }) => {
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
    control,
  } = useForm({
    mode: "all",
  });

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({ component: Component, ...rest }) => (
        <Component key={rest.name} control={control} {...rest} />
      ))}

      <Button
        type="submit"
        className="w-full"
        disabled={!isValid || isSubmitting}
      >
        Register
      </Button>
    </form>
  );
};

export default CustomForm;
