import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";
const BASE_URL_CHARACTER = "https://akabab.github.io/starwars-api/api/all.json";

export const swapiGetCharacter = async () => {
  const response = await axios.get(`${BASE_URL_CHARACTER}`);
  return response.data;
};

export const swapiGetSpecies = async (param) => {
  const response = await axios.get(`${BASE_URL}species/?page=${param}`);
  return response.data;
};

export const nextAndPrevious = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const swapiGetFilm = async () => {
  const response = await axios.get(`${BASE_URL}films/`);
  return response.data;
};

export const swapiGetPlanets = async (param) => {
  const response = await axios.get(`${BASE_URL}planets/?page=${param}`);
  return response.data;
};

export const swapiGet = async (param) => {
  const response = await axios.get(`${BASE_URL}${param}`);
  return response.data;
};
