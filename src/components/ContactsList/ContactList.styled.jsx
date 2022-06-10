import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
`;

export const Wrapper = styled.ul`
  margin-top: 10px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
  padding: 10px;
  font-weight: bold;
  width: 300px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(index) =>
    index.index % 2 !== 0 ? "#0AB3CF" : "#1B59CA"};
`;

export const ButtonClose = styled.button.attrs(() => ({
  type: "button",
}))`
  padding: 5px 7px;
  border-radius: 50%;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

export const TextList = styled.span`
  display: inline-block;
  margin-top: 10px;
`;
