import React from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data) => {
    await wait(5000);
    console.log("data");
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="elon musk"
          {...register("name", {
            required: {
              value: true,
              message: "Name is mendatory..",
            },
          })}
        />
        {errors?.name && (
          <p className="small !m-0 text-red-400">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          {...register("email", {
            required: {
              value: true,
              message: "Email is mendatory...",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter valid email address",
            },
          })}
        />
        {errors?.email && (
          <p className="small !m-0 text-red-400">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is mendatory...",
            },
          })}
        />
        {errors?.password && (
          <p className="small !m-0 text-red-400">{errors.password.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm Password is mendatory...",
            },
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors?.confirmPassword && (
          <p className="small !m-0 text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={!isValid || isSubmitting}
      >
        Register
      </Button>
      <Button variant="outline" className="w-full">
        Register with Google
      </Button>
    </form>
  );
}

export default Register;
