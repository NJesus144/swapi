import Link from "next/link";

import { ContainerCard, P, NavLink } from "./styles.js";
import Logo from "../logo/Logo.jsx";

export default function Card({ children, img, param }) {
  return (
    <Link href={`${param}`} passHref >
      <NavLink target="_blank">
        <ContainerCard>
          <Logo image={img} />
          <P>{children}</P>
        </ContainerCard>
      </NavLink>
    </Link>
  );
}
