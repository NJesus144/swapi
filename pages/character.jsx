import styled from "styled-components";
import { useState, useEffect } from "react";
import { swapiGetCharacter, swapiGet } from "./api/request/swapiGet";

import Navbar from "../src/components/navbar/Navbar";
import Character from "../src/components/characterContainer/CharacterContainer";



const Button = styled.button`

  padding: 15px 30px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18.4px;
  display: block;
  background-color: #ffe300;
  border: none;
  cursor: pointer;
  transition: all .3s;

  &:hover{
    transform: scale(1.05);
  }

`;

const ContainerPage = styled.div`
  background-color: #eee;
  padding-bottom: 30px ;
`;

const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  background-color: #eee;
`;

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
  console.log(characters)
  return (
    <>
      <Navbar />
      <ContainerPage>
        <Container>
          {characters.map((character, index) => index < value && (
                  <Character character={character} key={character.id} />
                )
            )}
        </Container>
        {value < characters.length && (
          <Button onClick={handleShowMore}>SHOW MORE</Button>
        )}
      </ContainerPage>
    </>
  );
}
