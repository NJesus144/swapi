import { ALink, ContainerFilm, Img } from "./style.js";

import { useContext } from "react";
import { ResponseAPI } from "../../../Contexts/ResponseAPI.js";
import axios from "axios";
import { useRouter } from "next/router.js";


export const Planets = ({ planet, indexID }) => {
  const router = useRouter();
  const {responseAPI, setResponseAPI} = useContext(ResponseAPI);

   const showID = async () => {
    const id = indexID + 1;
    const response = await axios.get(`/api/planetID/${id}`);
    setResponseAPI([response.data])
    router.push({
      pathname: "/teste",
    })
  };



console.log(responseAPI)
  return (
    <ContainerFilm onClick={showID}>
      <ALink>

        <Img src={"/planets.png"} alt={planet.title} />
      </ALink>

      <ALink>
        <h1>{planet.name}</h1>
      </ALink>
    </ContainerFilm>
  );
};
