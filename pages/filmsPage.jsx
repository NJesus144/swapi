import styled from "styled-components";
import Navbar from "../src/components/navbar/Navbar";
import { PosterFilm } from "../src/posterFilm";
import { Films } from "../src/components/CardsLayout/films/films";
import { Container } from "../src/layout/Container";
import { useRouter } from "next/router";
import { Btn } from "../src/components/button/Button";

const BgContainer = styled.div`
  background-color: #eee;
`;

const ContainerWidth = styled.div`
  background-color: red;
  max-width: 1300px;
  margin: auto;
`;

export default function FilmPage() {
  const router = useRouter();

const goBack = () => {
  router.push('/')
}

  return (
    <>
      <BgContainer>
      <Navbar />
        <ContainerWidth>
          <Container>
            {PosterFilm.map((film, index) => (
              <Films film={film}  key={film.id} id={film.id} indexID={index}/>
            ))}
          </Container>
        </ContainerWidth>
        <Btn onClick={goBack}>BACK</Btn>
      </BgContainer>
    </>
  );
}
