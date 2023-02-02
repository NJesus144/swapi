import { ALink, ContainerFilm, Img } from "./style.js";
import { useRouter } from "next/router.js";
import { useContext } from "react";
import { ResponseAPI } from "../../../Contexts/ResponseAPI.js";
import axios from "axios";

export const Films = ({ film, indexID, id }) => {
  const router = useRouter();
  const { responseAPI, setResponseAPI } = useContext(ResponseAPI);

  const showID = async () => {
    const id = indexID + 1;
    const response = await axios.get(`/api/filmID/${id}`);
    setResponseAPI([response.data]);
    router.push({
      pathname: "/filmId",
    });
  };

  return (
    <ContainerFilm onClick={showID}>
      <ALink>
        <Img src={film.img} alt={film.title} />
      </ALink>

      <ALink>
        <h1>{film.title}</h1>
      </ALink>
    </ContainerFilm>
  );
};
