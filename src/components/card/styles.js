import styled from "styled-components";

export const ContainerCard = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px black;
`;

export const P = styled.p`
  font-size: 36px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: yellow;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
`;
