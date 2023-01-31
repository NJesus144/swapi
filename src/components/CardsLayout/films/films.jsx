import { ALink, ContainerFilm, Img } from "./style.js";
import { Container } from "../../../layout/Container.jsx";

export const Films = ({ film }) => {
  return (
  
      <ContainerFilm>
        <ALink>
          <Img src={film.img} alt={film.title} />
        </ALink>

        <ALink>
          <h1>{film.title}</h1>
        </ALink>
      </ContainerFilm>
  
  );
};
