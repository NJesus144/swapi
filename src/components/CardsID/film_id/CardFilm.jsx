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

export const CardFilm = ({film, indexID, image}) => {
  const id = film.episode_id
  return (
    <>
  <Navbar />
    <Container>
      <ContainerInfo>
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
          <P>Episode: {film.episode_id}</P>
          <P>Opening: {film.opening_crawl}</P>
          <P>Producer: {film.producer}</P>
          <P>Release Date: {film.release_date}</P>
      
        </ContainerDetails>
      </ContainerInfo>
    </Container>
    </>
  );
};
