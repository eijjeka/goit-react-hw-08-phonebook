import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import authOperations from "redux/auth/auth-operations";
import { useForm } from "react-hook-form";
import { GrMail, GrKey, GrUser } from "react-icons/gr";
import {
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
  ListError,
  Title,
} from "./Register.styled";

export const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    dispatch(authOperations.register(data));
    reset();
  };

  return (
    <section>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Hello, friend!</Title>
          <Label>
            Name
            <Input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Please enter correct name (min 3 letter)",
                },
              })}
            />
            <GrUser
              style={{
                position: "absolute",
                top: "35px",
                left: "8px",
              }}
              size={25}
            />
          </Label>
          <ErrorMessage>
            {errors?.name && (
              <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            )}
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
                  message: "Please enter a valid email «example@mail.com»",
                },
              })}
            />
            <GrMail
              style={{
                position: "absolute",
                top: "35px",
                left: "8px",
              }}
              size={25}
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
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,15}$/,
                  message: "",
                },
              })}
            />
            <GrKey
              style={{
                position: "absolute",
                top: "35px",
                left: "8px",
              }}
              size={25}
            />
          </Label>
          <ErrorMessage>
            {errors?.password && (
              <ErrorMessage>
                <ListError>
                  <li>At least 6 characters long.</li>
                  <li>Contains at least 1 number.</li>
                  <li>Containsat least 1 lowercase letter.</li>
                  <li>Contains at least 1 uppercase letter.</li>
                  <li>Contains a special character(!@#$%^&* _= +-)</li>
                </ListError>
              </ErrorMessage>
            )}
          </ErrorMessage>
          {isValid && (
            <Button
              type="submit"
              as={motion.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              Create Account
            </Button>
          )}
        </Form>
      </motion.div>
    </section>
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
