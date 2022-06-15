import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 295px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  position: relative;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  color: #fff;
  background-color: #212529;
  border: 1px solid transparent;
  border-color: #212529;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:active {
    color: #fff;
    background-color: #1a1e21;
    border-color: #191c1f;
    box-shadow: 0 0 0 0.25rem rgb(66 70 73 / 50%);
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 10px;
  margin-top: 4px;
  text-align: center;
`;
