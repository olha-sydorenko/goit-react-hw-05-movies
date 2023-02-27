import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 300px;
  background-color: #fff;
  border: 1px darkblue solid;
  border-radius: 3px;
  overflow: hidden;
`;
export const SearchButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
`;

export const ButtonLabel = styled.span`
  border: 0;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
