import { ALink, Container, Img} from "./style.js";
import Link from "next/link";

export const ContainerPage = ({ itemProps, image }) => {
  return (
    
      <Container>
        <Link href={`#`}>
          <ALink>
            <Img src={itemProps.image || image} alt={itemProps.name} />
          </ALink>
        </Link>
        <Link href={`#`}>
          <ALink>
            <h1>{itemProps.name}</h1>
          </ALink>
        </Link>
      </Container>
  
  );
};

ContainerPage.defaultProps = {
  image: '/starship.webp'
}