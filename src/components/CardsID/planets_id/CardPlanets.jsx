import {
  Container,
  ContainerInfo,
  ContainerDetails,
  H1,
  P,
  Image,
  DivName,
  Span
} from "./styles";
import Navbar from "../../navbar/Navbar";

export const CardPlanet = ({planet}) => {
  return (
    <>
  <Navbar />
    <Container>
        <Image src="/planet-star-wars.png" />
        <ContainerDetails>
          <DivName>
            <H1>{planet.name}</H1>
          </DivName>
      <ContainerInfo>
          <P>Climate</P>
          <Span> {planet.climate}</Span>
      </ContainerInfo>
      <ContainerInfo>
          <P>Population</P>
          <Span>{planet.population}</Span>
      </ContainerInfo>
      <ContainerInfo>
          <P>Gravity</P>
          <Span>{planet.gravity}</Span>
      </ContainerInfo>     
        </ContainerDetails>
    </Container>
    </>
  );
};
