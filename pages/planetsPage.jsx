import styled from "styled-components";
import { useState, useEffect } from "react";

import { Planets } from "../src/components/CardsLayout/planets/Planets";
import Navbar from "../src/components/navbar/Navbar";
import { Container } from "../src/layout/Container";
import { BodyPage } from "../src/layout/BodyPage";
import { Btn } from "../src/components/button/Button";
import { swapiGetPlanets } from "./api/request/swapiGet";
import { nextAndPrevious } from "./api/request/swapiGet";

const BoxButton = styled.div`display: flex;`;

export default function PlanetPage() {
  const [actualPage, setActualPage] = useState(1);

  const [planets, setPlanets] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await swapiGetPlanets(actualPage);
    setPlanets(response.results);
    return response;
  };

  const handleNextPage = async () => {
    const response = await fetchData();
    setActualPage(actualPage + 1);
    const resNextPAge = await nextAndPrevious(response.next);
    setPlanets(resNextPAge.results);
    setDisabledPrev(false);

    if (resNextPAge.next === null) {
      setDisabled(true);
      setDisabledPrev(false);
    }
  };

  const handlePrevPage = async () => {
    const response = await fetchData();
    setActualPage(actualPage - 1);
    const resNextPAge = await nextAndPrevious(response.previous);
    setPlanets(resNextPAge.results);
    setDisabled(false);

    if (resNextPAge.previous === null) {
      setDisabledPrev(true);
      setDisabled(false);
    }
  };

  return (
    <div>
      <Navbar />
      <BodyPage>
        <Container>
          {planets.map((planet, index) => (
            <Planets planet={planet} actualPage={actualPage} indexID={index} key={index} />
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
    </div>
  );
}
