import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


import RequestAPI from "../../../pages/api/request/swapiGet";

export const Search = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [film, setFilm] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(0);
  const [countPage, setCountPage] = useState(2);
  const [disabled, setDisabled] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      await RequestAPI(setPeople, setVehicles, setFilm, setPlanets);
    };
    
    fetchData().catch(console.error);
    console.log("==>", people);
  
  }, []);

  console.log("==>", people);



  return (
    <div>
      {
      people?.map((person, index) => (
        <p>{person.name}</p>
      ))
    }
   
      <button disabled={disabled} onClick={nextPage}>
        Proxima
      </button>
    </div>
  );
};
