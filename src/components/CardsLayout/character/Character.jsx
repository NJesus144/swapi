import { ALink, Container, Img } from "./style.js";
import { useContext } from "react";
import { ResponseAPI } from "../../../Contexts/ResponseAPI.js";
import axios from "axios";
import { useRouter } from "next/router.js";

export const Character = ({ character }) => {
  const router = useRouter();
  const { setResponseAPI } = useContext(ResponseAPI);

  const showID = async () => {
    const response = await axios.get(`/api/characterID/${character.id}`);
    setResponseAPI([response.data]);
    router.push({
      pathname: "/characterId",
    });
  };

  return (
    <Container onClick={showID}>
      <ALink>
        <Img src={character.image} alt={character.name} />
      </ALink>

      <ALink>
        <h1>{character.name}</h1>
      </ALink>
    </Container>
  );
};
