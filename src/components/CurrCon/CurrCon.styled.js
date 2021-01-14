import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  color: #49c5b6;
  cursor: pointer;
  border-radius: 4px;
  border: 2.3px solid #49c5b6;
  transition: all 0.3s ease-in-out;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  min-width: 36px;
  padding: 2.3px;
  &:hover {
    color: #00aeb0;
    border: 2.3px solid #00aeb0;
  }
`;

export const Input = styled.input`
  color: #4d4f5c;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  padding: 4.5px 11px;
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: #6fd1c2;
  }
`;

export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-align: left;
  color: #4d4f5c;
`;

export const LabelBlock = styled.div`
  margin-bottom: 7px;
`;

export const Select = styled.select`
  color: #4d4f5c;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  padding: 4.5px 11px;
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:hover {
    border-color: #6fd1c2;
  }
`;

export const SelectBlock = styled.div`
  margin: 7px 0;
`;

export const CurrencyBlock = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
`;

export const Subitle = styled.h4`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #4d4f5c;
`;

export const ColorTitle = styled.h4`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #49c5b6;
`;
