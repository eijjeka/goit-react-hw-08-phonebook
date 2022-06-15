import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import authOperations from "redux/auth/auth-operations";
import { useForm } from "react-hook-form";
import { Form, Label, Input, Button, ErrorMessage } from "./Register.styled";

export const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    dispatch(authOperations.register(data));
    reset();
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Name
          <Input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Please enter correct name (min 3 symbol)",
              },
            })}
          />
        </Label>
        <ErrorMessage>
          {errors?.name && <ErrorMessage>{errors?.name?.message}</ErrorMessage>}
        </ErrorMessage>
        <Label>
          Email
          <Input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email example@mail.com",
              },
            })}
          />
        </Label>
        <ErrorMessage>
          {errors?.email && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </ErrorMessage>
        <Label>
          Password
          <Input
            type="password"
            {...register("password", {
              required: "Поле обязательное к заполнению",
              minLength: {
                value: 6,
                message: "At least 6 characters long",
              },
            })}
          />
        </Label>
        <ErrorMessage>
          {errors?.password && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
        </ErrorMessage>
        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
      </Form>
    </motion.div>
  );
};

export default Register;

// const handleOnInputChange = (e) => {
//   switch (e.target.type) {
//     case "text":
//       return setName(e.target.value);
//     case "email":
//       return setEmail(e.target.value);
//     case "password":
//       return setPassword(e.target.value);
//     default:
//       return;
//   }
// };

// const handleOnSubmit = (e) => {
//   e.preventDefault();
//   dispatch(authOperations.register({ name, email, password }));
//   setName("");
//   setEmail("");
//   setPassword("");
// };
