import {ALink, CharacterContainer, Img } from './style.js'
import Link from "next/link";


function Character({ character }) {
  return (
    <CharacterContainer>
      <Link href={`/id/${character.id}.json`}>
        <ALink>
          <Img src={character.image} alt={character.name} />
        </ALink>
      </Link>
      <Link href={`/id/${character.id}.json`}>
        <ALink>
          <h1>{character.name}</h1>
        </ALink>
      </Link>
     
    </CharacterContainer>
  );
}

export default Character;
