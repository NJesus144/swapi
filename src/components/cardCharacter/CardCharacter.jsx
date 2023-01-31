import {
  Container,
  ContainerInfo,
  ContainerDetails,
  H1,
  P,
  Image,
  DivName,
} from "./styles";
import Navbar from "../navbar/Navbar";

export const CardCharacter = ({charID}) => {
  return (
    <>
  <Navbar />
    <Container>
      <ContainerInfo>
        <Image src="/darth.png" />
        <ContainerDetails>
          <DivName>
            <H1>{charID.name}</H1>
          </DivName>
          <P>Height: {charID.height}</P>
          <P>Gender: {charID.gender}</P>
          <P>Homeworld: {charID.homeworld}</P>
          <P>Masters: {charID.masters}</P>
          <P>Apprentices: {charID.apprentices}</P>
        </ContainerDetails>
      </ContainerInfo>
    </Container>
    </>
  );
};
