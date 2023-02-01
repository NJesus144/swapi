import {
  Container,
  ContainerInfo,
  ContainerDetails,
  H1,
  P,
  Image,
  DivName,
} from "./styles";
import Navbar from "../../navbar/Navbar";

export const CardPlanet = ({planet}) => {
  return (
    <>
  <Navbar />
    <Container>
      <ContainerInfo>
        <Image src="/planet-star-wars.png" />
        <ContainerDetails>
          <DivName>
            <H1>{planet.name}</H1>
          </DivName>
          <P>Climate: {planet.climate}</P>
          <P>Population: {planet.population}</P>
          <P>Gravity: {planet.gravity}</P>
       
        </ContainerDetails>
      </ContainerInfo>
    </Container>
    </>
  );
};
