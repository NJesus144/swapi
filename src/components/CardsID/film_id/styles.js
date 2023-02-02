import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerDetails = styled.div`
  max-width: 500px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 5px;
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
  font-size: 18px;
  margin-top: 10px;
`;

export const Image = styled.img`
  width: 350px;
  height: 350px;
  padding: 10px;

  @media(max-width: 380px){
    width: 250px;
  } 
`;
export const Span = styled.span`
  color: orange;
`;
