import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  max-width: 500px;
  margin: auto;
`;

export const ContainerInfo = styled.div`
  margin-top: 5px;
`;

export const ContainerDetails = styled.div`
  text-align: center;
  border-radius: 5px;
`;

export const DivName = styled.div`
  background-image: url("/space.jpg");
  height: 50px;
  min-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 430px) {
    min-width: 0px;
    max-width: 400px;
  }
  @media (max-width: 320px) {
    height: 80px;
  }
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
  width: 400px;
  margin-bottom: 5px;
`;

export const Span = styled.span`
  color: orange;
`;
