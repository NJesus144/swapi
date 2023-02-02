import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
`;

export const ContainerInfo = styled.div``;

export const ContainerDetails = styled.div`
  padding-bottom: 30px;
  text-align: center;
  border-radius: 5px;
  width: 100%;
`;

export const DivName = styled.div`
  background-image: url("/space.jpg");

  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const H1 = styled.h1`
  color: white;
  text-transform: uppercase;
`;

export const P = styled.p`
  color: #0c0907;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`;

export const Image = styled.img`
  max-width: 400px;
  height: 400px;
  padding: 20px;
`;

export const Span = styled.span`
  color: orange;
`;
