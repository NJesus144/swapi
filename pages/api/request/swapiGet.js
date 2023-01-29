import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

export default async function RequestAPI(people, starships, film, planets) {
  try {
    Promise.all([
      swapiGet("people/"),
      swapiGet("starships/"),
      swapiGet("films/"),
      swapiGet("planets/"),
    ]).then((results) => {
      console.log(results)

      people(results[0].data.results)
      starships(results[1].data);
      film(results[2].data);
      planets(results[3].data);
    
    });
  } catch (err) {
    console.log(err);
  }
}

function swapiGet(param) {
  return axios.get(`${BASE_URL}${param}`);
}
