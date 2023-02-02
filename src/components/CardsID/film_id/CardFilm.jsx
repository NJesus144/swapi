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

export const CardFilm = ({film}) => {
  const id = film.episode_id
  return (
    <>
  <Navbar />
    <Container>
        <Image 
        src={
          id === 1 ? 'The_Phantom_Menace.jpg': ''||     
          id === 2 ? '/Attack_of_the_Clones.jpg': ''||     
          id === 3 ? '/Revenge_of_the_Sith.jpg': ''||     
          id === 4 ? '/A_New_Hope.jpg': ''|| 
          id === 5 ? '/The_Empire _Strikes_Back.jpg': ''||     
          id === 6 ? '/Return_of_the_Jedi.jpg': '' }/>
        <ContainerDetails>
          <DivName>
            <H1>{film.title}</H1>
          </DivName>
      <ContainerInfo>
          <P>Episode</P>
          <Span>{film.episode_id}</Span>
      </ContainerInfo>
      <ContainerInfo>
          <P>Opening</P> 
          <Span>{film.opening_crawl}</Span>
      </ContainerInfo>
      <ContainerInfo>
          <P>Producer</P>
          <Span>{film.producer}</Span>
      </ContainerInfo>
      <ContainerInfo>
          <P>Release Date</P>
          <Span>{film.release_date}</Span>
      </ContainerInfo>   
        </ContainerDetails>
    </Container>
    </>
  );
};
