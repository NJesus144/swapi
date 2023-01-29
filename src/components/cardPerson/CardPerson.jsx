import axios from "axios";
import { useEffect, useState } from "react";

 const search = async (elo) => {
//   const response = await axios.get(elo);

//   console.log(response);

 };

let promisses = []

export const CardPerson = ({ name  }) => {
 

  return (
    <>
      <div>
        <p>{name}</p>
      </div>
    </>
  );
};
