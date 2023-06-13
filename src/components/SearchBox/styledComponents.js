import styled from "styled-components";

export const SearchButton = styled.button`
  color: black;
  background: green;
  border: none;
  padding: 8px;
  width: 100%;
`;

export const ClearButton = styled(SearchButton)``;

export const SearchInput = styled.input`
  border: none;
  background: #e5e5e5;
  padding: 8px;

  :focus-visible{
    outline: none;
  }
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 48px;
`;