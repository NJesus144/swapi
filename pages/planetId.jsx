import { useContext } from "react";
import { ResponseAPI } from "../src/Contexts/ResponseAPI";
import { CardPlanet } from "../src/components/CardsID/planets_id/CardPlanets";
import { useRouter } from "next/router";
import { Btn } from "../src/components/button/Button";

export default function PlanetId() {
  const { responseAPI } = useContext(ResponseAPI);

  const router = useRouter();

  const goBack = () => {
    router.push("/planetsPage");
  };

  return (
    <div>
      {responseAPI.map((planet, index) => (
        <CardPlanet planet={planet} key={index}/>
      ))}
      <Btn onClick={goBack}>Back</Btn>
    </div>
  );
}
