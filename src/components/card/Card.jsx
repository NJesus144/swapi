import Link from "next/link";

import { ContainerCard, P, NavLink } from "./styles.js";
import Logo from "../logo/Logo.jsx";

export default function Card({ children, img }) {
  return (
    <Link href={'#'} passHref>
      <NavLink>
        <ContainerCard>
          <Logo image={img} />
          <P>{children}</P>
        </ContainerCard>
      </NavLink>
    </Link>
  );
}
