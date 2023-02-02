import { ALink, ContainerFilm, Img } from "./style.js";
import { useContext } from "react";
import { ResponseAPI } from "../../../Contexts/ResponseAPI.js";
import axios from "axios";
import { useRouter } from "next/router.js";

import { BodyPage } from "../../../layout/BodyPage.jsx";

export const Planets = ({ planet, indexID, actualPage}) => {
  const router = useRouter();
  const { setResponseAPI } = useContext(ResponseAPI);

const showID = async () => {

   const findOutTheTd = () => {
    if(actualPage === 1) return indexID + 1
    if(actualPage === 2 ) return 10 + indexID + 1
    if(actualPage === 3) return 20 + indexID + 1
    if(actualPage === 4) return 30 + indexID + 1
    if(actualPage === 5) return 40 + indexID + 1
    if(actualPage === 6) return 50 + indexID + 1
   }
   const id = findOutTheTd();
  
    const response = await axios.get(`/api/planetID/${id}`);
    setResponseAPI([response.data]);
    router.push({
      pathname: "/planetId",
    });
   };

  return (
    <BodyPage>
      <ContainerFilm onClick={showID}>
        <ALink>
          <Img src={"/planet-star-wars.png"} alt={planet.title} />
        </ALink>

        <ALink>
          <h1>{planet.name}</h1>
        </ALink>
      </ContainerFilm>
    </BodyPage>
  );
};
