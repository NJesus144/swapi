import { useEffect, useState } from "react";

import RequestAPI from "../../../pages/api/request/swapiGet";
import CharacterPage from "../../../pages/character";
import Body from "../body/Body";


export const Search = () => {
  const [characters, setcharacters] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [film, setFilm] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(0);
  const [countPage, setCountPage] = useState(2);
  const [disabled, setDisabled] = useState(false);



  // useEffect(() => {
  //   const fetchData = async () => {
  //     await RequestAPI(setcharacters, setVehicles, setFilm, setPlanets);
  //   }

  //   console.log("==>", characters);


  //   fetchData()
    
  // }, []);

  console.log("==>", characters);

  // const nextPage = async () => {
  //   setCountPage(countPage + 1);
  //   const URL_NEXT_PAGE = `https://swapi.dev/api/people/?page=${countPage}`;

  //   const response = await axios.get(URL_NEXT_PAGE);
  //   console.log(response.data);
  //   if (response.data.next === null) return setDisabled(true);
  // };

  return (
    <Body />
  
  );
};
