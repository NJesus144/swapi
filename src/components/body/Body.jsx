import { ContainerBody } from "./styles";

import Card from "../card/Card";

export default function Body() {
  return (
    <ContainerBody>
      <Card param={"/characters"} img={"/darth.png"}>
        Characters
      </Card>
      <Card param={"/speciesPage"} img={"/starships.png"}>
        Starships
      </Card>
      <Card param={"/filmsPage"} img={"/movie.png"}>
        Films
      </Card>
      <Card param={"/planetsPage"} img={"/planets.png"}>
        Planets
      </Card>
    </ContainerBody>
  );
}
