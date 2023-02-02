import axios from "axios";

export default async function Planets(req, res) {
  const { id } = req.query;

  try {
    const response = await axios.get(`https://swapi.dev/api/films/${id}/`);
    res.status(200).send(response.data);
  } catch (e) {
    console.log(e);
  }
}
