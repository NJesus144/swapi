import {
  Container,
  ContainerInfo,
  ContainerDetails,
  H1,
  P,
  Image,
  DivName,
  Span,
} from "./styles";
import Navbar from "../../navbar/Navbar";

export const CardSpecies = ({ species }) => {
  return (
    <>
      <Navbar />
      <Container>
        <Image src="/jawa.jpg" />
        <ContainerDetails>
          <DivName>
            <H1>{species.name}</H1>
          </DivName>
          <ContainerInfo>
            <P>Classification</P>
            <Span>{species.classification}</Span>
          </ContainerInfo>
          <ContainerInfo>
            <P>Skin colors</P>
            <Span>{species.skin_colors}</Span>
          </ContainerInfo>
          <ContainerInfo>
            <P>Eye colors</P>
            <Span>{species.eye_colors}</Span>
          </ContainerInfo>
          <ContainerInfo>
            <P>Language</P>
            <Span>{species.language}</Span>
          </ContainerInfo>
        </ContainerDetails>
      </Container>
    </>
  );
};
