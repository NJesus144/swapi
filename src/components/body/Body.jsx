import { ContainerBody } from "./styles"

import Card from "../card/Card"

export default function Body() {
  return(
    <ContainerBody>
    <Card param={'/character'} img={'/darth.png'}>Characters</Card>
    <Card param={'/starship'} img={'/starships.png'}>Starships</Card>
    <Card param={'/film'} img={'/movie.png'}>Films</Card>
    <Card param={'/planet'} img={'/planets.png'}>Planets</Card>
   
    </ContainerBody>
  )
}


