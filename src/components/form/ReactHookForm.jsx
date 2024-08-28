import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { cn } from "../../lib/utils";

const ReactHookForm = ({ fields, onSubmit, className }) => {
  const form = useForm({
    mode: "all",
    defaultValues: fields.reduce(
      (p, c) => ({ ...p, [c.name]: c.defaultValue }),
      {}
    ),
  });

  return (
    <Form {...form}>
      <form
        className={cn("grid gap-4", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {fields.map(
          ({ component: Component, name, defaultValue, rules, ...rest }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => <Component field={field} {...rest} />}
              rules={rules}
            />
          )
        )}

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

export default ReactHookForm;
