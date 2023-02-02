import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

export const ContainerInfo = styled.div`
  margin-top: 20px;
`;

export const Span = styled.span`
  color: orange;
`;

export const ContainerDetails = styled.div`
  width: 100%;
  padding-bottom: 30px;
  text-align: center;
  border-radius: 5px;
`;

export const DivName = styled.div`
  background-image: url("/space.jpg");
  height: 50px;
  max-width: 400px;
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
  width: 600px;
  height: 400px;
  padding: 20px;

  @media (max-width: 640px) {
    width: 320px;
  }
`;
