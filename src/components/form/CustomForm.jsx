import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";

const CustomForm = ({ fields, onSubmit }) => {
  const form = useForm({
    mode: "all",
    defaultValues: fields.reduce(
      (p, c) => ({ ...p, [c.name]: c.defaultValue }),
      {}
    ),
  });

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        {fields.map(({ component: Component, name, defaultValue, ...rest }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => <Component field={field} {...rest} />}
          />
        ))}

        <Button
          type="submit"
          className="w-full"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Register
        </Button>
      </form>
    </Form>
  );
};

export default CustomForm;
