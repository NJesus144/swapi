import { useState, useEffect } from "react";
import { Planets } from "../src/components/CardsLayout/planets/Planets";

import Navbar from "../src/components/navbar/Navbar";

import { swapiGetPlanets } from "./api/request/swapiGet";

export default function PlanetPage() {
  const [planets, setPlanets] = useState([])
  const [ID, setID] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await swapiGetPlanets();
      setPlanets(response.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {planets.map((planet, index) => (
        <Planets planet={planet} indexID={index} key={index}/>
       
      ))}
    </div>
  );
}
