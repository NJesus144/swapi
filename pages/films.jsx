import styled from "styled-components";
import Navbar from "../src/components/navbar/Navbar";
import { PosterFilm } from "../src/posterFilm";
import { Films } from "../src/components/CardsLayout/films/films";
import { Container } from "../src/layout/Container";

const BgContainer = styled.div`
  background-color: #eee;
`;

const ContainerWidth = styled.div`
  background-color: red;
  max-width: 1300px;
  margin: auto;
`;

export default function FilmPage() {
  return (
    <>
      <Navbar />
      <BgContainer>
        <ContainerWidth>
          <Container>
            {PosterFilm.map((film, index) => (
              <Films film={film} key={film.id} />
            ))}
          </Container>
        </ContainerWidth>
      </BgContainer>
    </>
  );
}
