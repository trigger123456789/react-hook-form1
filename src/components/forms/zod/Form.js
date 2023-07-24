import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Form = ({ setSignupFinished, fieldsConfig }) => {
  const fieldSchemas = {};

  console.log("fieldSchemas", fieldSchemas);

  for (const field of fieldsConfig) {
    fieldSchemas[field.name] = z.string().nonempty(field.errorMessage);
    switch (field.name) {
      case "username":
        fieldSchemas[field.name] = z
          .string()
          .min(1, "user name is required Field");

      case "phoneNumber":
        fieldSchemas[field.name] = z
          .string()
          .min(1, field.errorMessage)
          .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);

      case "email":
        fieldSchemas[field.name] = z.string().min(1, field.errorMessage);
        break;
      case "password":
        fieldSchemas[field.name] = z.string().min(1, field.errorMessage);

      default:
        break;
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(z.object(fieldSchemas)),
  });

  const formSubmit = (data) => {
    console.log(data);
    setSignupFinished(true);
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <p>Join our community of users by creating an account</p>

      <form onSubmit={handleSubmit(formSubmit)}>
        {fieldsConfig.map((field) => (
          <Input
            key={field.name}
            id={field.name}
            label={field.label}
            type={field.type}
            placeholder={`Enter ${field.label}`}
            register={register}
            errorMessage={errors[field.name]?.message}
          />
        ))}

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Form;
