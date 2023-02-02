import { ALink, ContainerFilm, Img, H1 } from "./style.js";
import { useContext } from "react";
import { ResponseAPI } from "../../../Contexts/ResponseAPI.js";
import axios from "axios";
import { useRouter } from "next/router.js";

import { BodyPage } from "../../../layout/BodyPage.jsx";

export const Species = ({ species, indexID, actualPage }) => {
  const router = useRouter();
  const { setResponseAPI } = useContext(ResponseAPI);

  const showID = async () => {
    const findOutTheTd = () => {
      if (actualPage === 1) return indexID + 1;
      if (actualPage === 2) return 10 + indexID + 1;
      if (actualPage === 3) return 20 + indexID + 1;
      if (actualPage === 4) return 30 + indexID + 1;
    };

    const id = findOutTheTd();
    const response = await axios.get(`/api/speciesID/${id}`);
    setResponseAPI([response.data]);
    router.push({
      pathname: "/speciesId",
    });
  };

  return (
    <BodyPage>
      <ContainerFilm onClick={showID}>
        <ALink>
          <Img src={"/jawa2.jpg"} alt={species.name} />
        </ALink>

        <ALink>
          <h1>{species.name}</h1>
        </ALink>
      </ContainerFilm>
    </BodyPage>
  );
};
