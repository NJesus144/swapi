import { ALink, Container, Img } from "./style.js";

export const ContainerPage = ({ itemProps, image, poster }) => {

  return (
    <Container >
      <ALink>
        <Img src={itemProps.image || image} alt={itemProps.name} />
      </ALink>

      <ALink>
        <h1>{itemProps.name}</h1>
      </ALink>
    </Container>
  );
};

ContainerPage.defaultProps = {
  image: "/starship.webp",
};
