import React from "react";
import { useState, useEffect } from "react";

const CAT_ENDPOINT_UMAGE_URL = "https://cataas.com/cat/says/";
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export function App() {
  const [fact, setfact] = useState("lorem ipsu cat fact");
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setfact(fact);

        const firstWord = fact.split(" ").slice(0, 3).join(" ");
        console.log(firstWord);

        fetch(`${CAT_ENDPOINT_UMAGE_URL}${firstWord}`).then((res) => {
          setImageUrl(`${CAT_ENDPOINT_UMAGE_URL}${firstWord}`);
        });
      });
  }, []);

  return (
    <main>
      <h1>app de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Imagen random con las primera 3 palabras del ${fact}`}
        />
      )}
    </main>
  );
}
