import styled from "styled-components";

export const AddButton = styled.button`
  color: black;
  background: green;
  border: none;
  padding: 8px;
  width: 100%;
`;

export const TextInputBox = styled.input`
  border: none;
  background: #e5e5e5;
  padding: 8px;

  :focus-visible{
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 30px;
`;