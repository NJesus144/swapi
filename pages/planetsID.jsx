import { useState, useContext, useEffect } from "react"
import { ResponseAPI } from "../src/Contexts/ResponseAPI"
import { CardPlanet } from "../src/components/CardsID/planets_id/CardPlanets"
import { useRouter } from "next/router"
import { Btn } from "../src/components/button/Button"

export default function Teste(){
const {responseAPI, setResponseAPI} = useContext(ResponseAPI)
console.log(responseAPI)
console.log("===> ", typeof(responseAPI.data))
const router = useRouter()


const goBack = () => {
  router.push('/planetsPage')
}

  return (
    <div>
    {
      responseAPI.map((planet, index) => (
        <CardPlanet planet={planet}/>
      ))
      
    }
    <Btn onClick={goBack}>Back</Btn>
    </div>
  )
}