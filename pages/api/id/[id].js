import axios from "axios";




export default async function CharacterID(req, res){
  const { id } = req.query;

  try{
    const response = await axios.get(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
    console.log(response)
    res.status(200).send(response.data);

  } catch(e) {

  }
}