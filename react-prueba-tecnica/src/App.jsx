import React from "react";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";

export function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClieck = async () => {
    refreshRandomFact();
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
