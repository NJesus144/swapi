import { useContext } from "react";
import { ResponseAPI } from "../src/Contexts/ResponseAPI";
import { CardCharacter } from "../src/components/CardsID/character_id/CardCharacter";
import { useRouter } from "next/router";
import { Btn } from "../src/components/button/Button";

export default function starshipId() {
  const { responseAPI } = useContext(ResponseAPI);

  const router = useRouter();

  const goBack = () => {
    router.push("/charactersPage");
  };

  return (
    <div>
      {responseAPI.map((character, index) => (
        <CardCharacter character={character} key={index} />
      ))}
      <Btn onClick={goBack}>Back</Btn>
    </div>
  );
}
