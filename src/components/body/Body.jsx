import { ContainerBody } from "./styles"

import Card from "../card/Card"

export default function Body() {
  return(
    <ContainerBody>
    <Card img={'/darth.png'}>Characters</Card>
    <Card img={'/starships.png'}>Starships</Card>
    <Card img={'/movie.png'}>Films</Card>
    <Card img={'/planets.png'}>Planets</Card>
   
    </ContainerBody>
  )
}


