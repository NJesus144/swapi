import { ContainerBody } from "./styles"

import Card from "../card/Card"

export default function Body() {
  return(
    <ContainerBody>
    <Card param={'/characters'} img={'/darth.png'}>Characters</Card>
    <Card param={'/starships'} img={'/starships.png'}>Starships</Card>
    <Card param={'/films'} img={'/movie.png'}>Films</Card>
    <Card param={'/planets'} img={'/planets.png'}>Planets</Card>
   
    </ContainerBody>
  )
}


