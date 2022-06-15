import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  padding: 10px 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 9px;
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 295px;
  margin-top: 5px;
  padding: 0.375rem 38px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(148, 148, 148, 0.75);
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
  margin-top: 20px;
  padding: 5px 5px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background-color: #212529;
  border-color: #212529;
  border-radius: 20px;
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

export const ListError = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Section = styled.section``;
