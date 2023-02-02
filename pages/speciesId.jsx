import { useContext } from "react";
import { ResponseAPI } from "../src/Contexts/ResponseAPI";
import { CardSpecies } from "../src/components/CardsID/species_id/CardSpecies";
import { useRouter } from "next/router";
import { Btn } from "../src/components/button/Button";

export default function starshipId() {
  const { responseAPI, setResponseAPI } = useContext(ResponseAPI);

  const router = useRouter();

  const goBack = () => {
    router.push("/speciesPage");
  };

  return (
    <div>
      {responseAPI.map((species, index) => (
        <CardSpecies species={species} key={index}/>
      ))}
      <Btn onClick={goBack}>Back</Btn>
    </div>
  );
}
