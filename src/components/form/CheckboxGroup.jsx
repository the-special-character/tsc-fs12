import React from "react";
import { useController } from "react-hook-form";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const FormCheckboxGroup = ({
  label,
  name,
  control,
  rules,
  defaultValue,
  options,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      {options.map((option) => (
        <div className="flex items-center space-x-2" key={option.value}>
          <Checkbox
            checked={field.value?.includes(option.value)}
            onCheckedChange={(checked) => {
              return checked
                ? field.onChange([...field.value, option.value])
                : field.onChange(
                    field.value?.filter((value) => value !== option.value)
                  );
            }}
          />
          <Label htmlFor="r1">{option.text}</Label>
        </div>
      ))}
      {error && <p className="small !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormCheckboxGroup;
