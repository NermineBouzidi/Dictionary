import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate, Link } from "react-router-dom";
import C404 from "./C404";
import SearchBar from "./SearchBar";

export default function Word(props) {
  const [word, setWord] = useState([]);
  const [status, setstatus] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();
  const [eror, setEror] = useState(false);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setstatus(true);
        }
        if (!response.ok) {
          setEror(true);
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0]?.meanings || []); // Check for data existence before accessing "meanings"
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [search]); // Add the dependency array to avoid an infinite loop

  if (status === true) {
    return (
      <>
        <Link to="/">see more</Link>
        <C404 />
      </>
    );
  }
  return (
    <>
      <SearchBar />
      {word.length > 0
        ? word.map((mea) => {
            return <p key={uuidv4()}>{mea.definitions[0]?.definition}</p>; // Check for data existence before accessing "definitions"
          })
        : null}
    </>
  );
}
