import { useState, useEffect } from "react";
import styled from "styled-components";

import {
  swapiGetStarships,
  starshipsNextAndPrevious,
} from "./api/request/swapiGet";

import Navbar from "../src/components/navbar/Navbar";
import { Btn } from "../src/components/button/Button";
import { ContainerPage } from "../src/layout/containerPage/ContainerPage";
import { BodyPage } from "../src/layout/BodyPage";
import { Container } from "../src/layout/Container";

const BoxButton = styled.div`
  display: flex;
  gap: 10px;
  padding: 50px 0px;
`;

export default function StarshipPage() {
  const [starships, setStarships] = useState([]);
  const [actualPage, setActualPage] = useState(1);

  const [disabled, setDisabled] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await swapiGetStarships(actualPage);
    setStarships(response.results);
    return response;
  };

  const handleNextPage = async () => {
    const response = await fetchData();
    setActualPage(actualPage + 1);
    const resNextPAge = await starshipsNextAndPrevious(response.next);
    setStarships(resNextPAge.results);
    setDisabledPrev(false);

    if (resNextPAge.next === null) {
      setDisabled(true);
      setDisabledPrev(false);
    }
  };

  const handlePrevPage = async () => {
    const response = await fetchData();
    setActualPage(actualPage - 1);
    const resNextPAge = await starshipsNextAndPrevious(response.previous);
    setStarships(resNextPAge.results);
    setDisabled(false);

    if (resNextPAge.previous === null) {
      setDisabledPrev(true);
      setDisabled(false);
    }
  };

  return (
    <>
      <Navbar />
      <BodyPage>
        <Container>
          {starships.map((starship, index) => (
            <ContainerPage itemProps={starship} key={index} />
          ))}
        </Container>
        <BoxButton>
          <Btn disabled={disabledPrev} onClick={handlePrevPage}>
            PREV
          </Btn>
          <Btn disabled={disabled} onClick={handleNextPage}>
            NEXT
          </Btn>
        </BoxButton>
      </BodyPage>
    </>
  );
}
