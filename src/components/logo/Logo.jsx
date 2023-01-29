import { ImageLogo } from "./styles.js";

export default function Logo({ image }) {
  return <ImageLogo src={image} />;
}

Logo.defaultProps = {
  image: "/star-wars.png",
};
