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

export const CardCharacter = ({ character }) => {
  return (
    <>
      <Navbar />
      <Container>
          <Image src={character.image} />
          <ContainerDetails>
            <DivName>
              <H1>{character.name}</H1>
            </DivName>
        <ContainerInfo>
            <P>Height</P>
             <Span>{character.height}</Span>
        </ContainerInfo>
        <ContainerInfo>
            <P>Gender</P>
            <Span> {character.gender}</Span>
        </ContainerInfo>
        <ContainerInfo>
            <P>Homeworld</P>
            <Span> {character.homeworld}</Span>
        </ContainerInfo>
        <ContainerInfo>
            <P>Masters</P>
            <Span> {character.masters}</Span>
        </ContainerInfo>
        <ContainerInfo>
            <P>Apprentices</P>
            <Span> {character.apprentices}</Span>
        </ContainerInfo>

          </ContainerDetails>
      </Container>
    </>
  );
};
