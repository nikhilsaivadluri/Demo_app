import styled from "styled-components";

export const RemoveButton = styled.button`
  color: black;
  background: red;
  border: none;
  padding: 8px;
  width:100%;
  height: 100%;
`;

export const UserTableComp = styled.table`
  font-family: arial, sans-serif;
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;

  td, th {
    border: 1px solid black;
    text-align: left;
    padding: 8px;
  }

  td:last-child {
    padding: 0px;
  }
`;


export const Container = styled.div`
  display: flex;
  padding: 30px;
`;