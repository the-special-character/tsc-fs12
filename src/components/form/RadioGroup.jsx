import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useController } from "react-hook-form";
import { Label } from "../ui/label";

const FormRadioGroup = ({
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
      <RadioGroup defaultValue={field.value} onValueChange={field.onChange}>
        {options.map((option) => (
          <div className="flex items-center space-x-2" key={option.value}>
            <RadioGroupItem value={option.value} id="r1" />
            <Label htmlFor="r1">{option.text}</Label>
          </div>
        ))}
      </RadioGroup>
      {error && <p className="small !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormRadioGroup;
