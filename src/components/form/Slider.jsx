import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useController } from "react-hook-form";
import { Slider } from "../ui/slider";

const FormSlider = ({
  label,
  name,
  control,
  rules,
  defaultValue,
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

  console.log(field.value);

  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Slider
        value={field.value}
        onValueChange={field.onChange}
        max={100}
        step={1}
      />
      {error && <p className="small !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormSlider;
