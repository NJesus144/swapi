import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";
const BASE_URL_CHARACTER = "https://akabab.github.io/starwars-api/api/all.json";




// export default  function RequestAPI(people, starships, film, planets) {
//   try {
//     Promise.all([
//       swapiGetCharacter("id/1.json"),
//       swapiGet("starships/"),
//       swapiGet("films/"),
//       swapiGet("planets/"),
//     ]).then((results) => {
//       console.log(results);

//       people(results[0].data);
//       starships(results[1].data);
//       film(results[2].data);
//       planets(results[3].data);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

export const swapiGetCharacter = async () => {
 const response =  await axios.get(`${BASE_URL_CHARACTER}`);
 return response.data
}

export const swapiGetStarships = async (param) => {
  const response =  await axios.get(`${BASE_URL}starships/?page=${param}`);
  return response.data
}

export const starshipsNextAndPrevious = async (url) => {
  const response =  await axios.get(url);
  return response.data
}

export const swapiGetFilm = async () => {
  const response =  await axios.get(`${BASE_URL}films/`);
  return response.data
}







export const  swapiGet = async (param) => {
  const response = await axios.get(`${BASE_URL}${param}`);
  return response.data
}