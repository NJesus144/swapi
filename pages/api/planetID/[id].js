import axios from "axios";

export default async function Planets(req, res) {
  const { id } = req.query;
  try {
    const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
      res.status(200).send(response.data);

    res.status(400).send("Bad_Request");
  } catch (e) {
    console.log(e);
  }
}
