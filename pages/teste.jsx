import { useState, useContext, useEffect } from "react"
import { ResponseAPI } from "../src/Contexts/ResponseAPI"
import { CardCharacter } from "../src/components/cardCharacter/CardCharacter"
import { Planets } from "../src/components/CardsLayout/planets/Planets"

export default function Teste(){
const {responseAPI, setResponseAPI} = useContext(ResponseAPI)

console.log("===> ", typeof(responseAPI))



  return (
    <div>
    123
    {
      Array.from(responseAPI).map((planet, index) => (
        <Planets planet={planet}/>
       
      ))
      
    }
    </div>
  )
}