import styled from "styled-components";

import { useContext } from "react";
import { ResponseAPI } from "../src/Contexts/ResponseAPI";
import { CardFilm } from "../src/components/CardsID/film_id/CardFilm";
import { useRouter } from "next/router";
import { Btn } from "../src/components/button/Button";

const ButtonBox = styled.div`
  padding-bottom: 30px;
`;

export default function FilmId() {
  const { responseAPI } = useContext(ResponseAPI);
  const router = useRouter();

  const goBack = () => {
    router.push("/filmsPage");
  };

  return (
    <div>
      {responseAPI.map((film, index) => (
        <CardFilm film={film} indexID={index} key={index} />
      ))}
      <ButtonBox>
        <Btn onClick={goBack}>Back</Btn>
      </ButtonBox>
    </div>
  );
}
