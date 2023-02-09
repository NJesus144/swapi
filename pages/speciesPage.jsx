import { useState, useEffect } from "react";
import styled from "styled-components";

import { swapiGetSpecies, nextAndPrevious } from "./api/request/swapiGet";

import Navbar from "../src/components/navbar/Navbar";
import { Btn } from "../src/components/button/Button";
import { Container } from "../src/layout/Container";
import { Species } from "../src/components/CardsLayout/species/Species";
import LoadingIcon from "../src/components/loadingIcon/LoadingIcon";

const BoxButton = styled.div`
  display: flex;
  padding: 20px 0px;
`;
const ContainerBody = styled.div`
  height: 100vh;
  background-color: #f1f2f3;
`;

const BoxAlignItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f2f3;
`;

export default function SpeciesPage() {
  const [species, setSpecies] = useState([]);
  const [actualPage, setActualPage] = useState(1);

  const [disabled, setDisabled] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);

  useEffect(() => {
    swapiGetSpecies(actualPage).then((response) => {
      setSpecies(response.results);
    });

    // fetchData();
  }, []);

  // const fetchData = async () => {
  //   const response = await swapiGetSpecies(actualPage);
  //   setSpecies(response.results);

  //   return response;
  // };

  const handleNextPage = () => {
    swapiGetSpecies(actualPage)
    .then((response) => {
      setSpecies(response.results);
      setActualPage(actualPage + 1);

      nextAndPrevious(response.next)
      .then((response) => {
        setSpecies(response.results);
        setDisabledPrev(false);

        if (response.next === null) {
          setDisabled(true);
          setDisabledPrev(false);
        }
      });
    });
  };

  const handlePrevPage = async () => {
    swapiGetSpecies(actualPage)
    .then((response) => {
      setSpecies(response.results);
      setActualPage(actualPage - 1);

      nextAndPrevious(response.previous)
        .then((response) => {
          setSpecies(response.results);
          setDisabled(false);
                if (response.previous === null) {
                  setDisabledPrev(true);
                  setDisabled(false);
                }
        })
    });
  };

  return (
    <>
      <Navbar />
      <ContainerBody>
        <LoadingIcon setStatus={species}>
          <BoxAlignItem>
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
          </BoxAlignItem>
        </LoadingIcon>
      </ContainerBody>
    </>
  );
}
