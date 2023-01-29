import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { CardPerson } from "../cardPerson/CardPerson";
// import {swapiGet} from '../request/swapiGet'
// import { swapiGetFilm } from "../request/swapiGet"
import RequestAPI from "../../../pages/api/request/swapiGet";

export const SearchPeople = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [film, setFilm] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(0);
  const [countPage, setCountPage] = useState(2);
  const [disabled, setDisabled] = useState(false);

  // const search = async () => {
  //   requestAPI()

  //   const responseFilm = await swapiGetFilm('/films')
  //   console.log(responseFilm)
  //   setFilm(responseFilm.results)
  // }

  useEffect(() => {
    const fetchData = async () => {
      await RequestAPI(setPeople, setVehicles, setFilm, setPlanets);
    };
    
    fetchData().catch(console.error);
    console.log("==>", people);
    // setPeople()
    // setVehicles()
    // setFilm()
    // setPlanets()
  }, []);

  console.log("==>", people);

  // const nextPage = async () => {
  //   setCountPage(countPage + 1);
  //   const URL_NEXT_PAGE = `https://swapi.dev/api/people/?page=${countPage}`;

  //   const response = await axios.get(URL_NEXT_PAGE);
  //   console.log(response.data);
  //   if (response.data.next === null) return setDisabled(true);
  // };

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
