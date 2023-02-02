import { useState, useEffect } from "react";
import styled from "styled-components";

import { swapiGetSpecies, nextAndPrevious } from "./api/request/swapiGet";

import Navbar from "../src/components/navbar/Navbar";
import { Btn } from "../src/components/button/Button";
import { BodyPage } from "../src/layout/BodyPage";
import { Container } from "../src/layout/Container";
import { Species } from "../src/components/CardsLayout/species/Species";

const BoxButton = styled.div`
  display: flex;
  gap: 10px;
  padding: 50px 0px;
`;

export default function SpeciesPage() {
  const [species, setSpecies] = useState([]);
  const [actualPage, setActualPage] = useState(1);

  const [disabled, setDisabled] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await swapiGetSpecies(actualPage);
    setSpecies(response.results);

    return response;
  };

  const handleNextPage = async () => {
    const response = await fetchData();
    setActualPage(actualPage + 1);
    const resNextPAge = await nextAndPrevious(response.next);

    setSpecies(resNextPAge.results);
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
    setSpecies(resNextPAge.results);
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
          {species.map((species, index) => (
            <Species
              species={species}
              actualPage={actualPage}
              key={index}
              indexID={index}
            />
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
