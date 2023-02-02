import axios from "axios";

export default async function Species(req, res) {
  const { id } = req.query;
  try {
    const response = await axios.get(`https://swapi.dev/api/species/${id}/`);
    res.status(200).send(response.data);

    res.status(400).send("Bad_Request");
  } catch (e) {

  }
}
