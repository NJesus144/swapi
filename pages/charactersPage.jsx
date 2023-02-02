import { useState, useEffect } from "react";
import { swapiGetCharacter } from "./api/request/swapiGet";

import Navbar from "../src/components/navbar/Navbar";
import { Btn } from "../src/components/button/Button";
import { BodyPage } from "../src/layout/BodyPage";
import { Container } from "../src/layout/Container";
import { Character } from "../src/components/CardsLayout/character/Character";

export default function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [value, setValue] = useState(12);

  const handleShowMore = () => {
    setValue(value + 12);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await swapiGetCharacter();
      setCharacters(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <BodyPage>
        <Container>
          {characters.map(
            (character, index) =>
              index < value && (
                <Character character={character} key={character.id} />
              )
          )}
        </Container>
        {value < characters.length && (
          <Btn onClick={handleShowMore}>SHOW MORE</Btn>
        )}
      </BodyPage>
    </>
  );
}
