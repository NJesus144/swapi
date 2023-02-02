import styled from "styled-components"

const Button = styled.button`
  padding: 15px 30px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18.4px;
  display: block;
  background-color: #ffe300;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Btn = ({onClick, children, disabled}) => {
  return (
    <Button disabled={disabled} onClick={onClick}>{children}</Button>
  )
}