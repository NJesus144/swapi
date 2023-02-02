import styled from "styled-components";

export const ContainerFilm = styled.div`
  display: flex;
  max-width: 300px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 2px 10px black;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  transition: all 0.25s ease;
  :hover {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  height: 300px;
  width: 300px;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 3px solid #9e4f60;
`;

export const ALink = styled.a`
  padding: 6px;
  color: #0c0907;
  text-transform: uppercase;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    transition: color 125ms;
    :hover {
      color: #9e4f60;
    }
`;
