import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts.js";
import { useCatImage } from "./hooks/useCatImage.js";

export function App() {
  const [fact, setfact] = useState("");
  const { imageUrl } = useCatImage({ fact });

  // Recuperar frase random de la API de catfact
  useEffect(() => {
    getRandomFact().then((newFact) => setfact(newFact));
  }, []);

  // Recuperar imagen random de la API de cataas

  const handleClieck = async () => {
    const newFatc = await getRandomFact();
    setfact(newFatc);
  };

  return (
    <main>
      <h1>app de gatitos</h1>
      <section>
        <button onClick={handleClieck}> Get new Fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Imagen random con las primera 3 palabras del ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
