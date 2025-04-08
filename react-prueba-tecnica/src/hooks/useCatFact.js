import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts.js";

export function useCatFact()  {
  const [fact, setfact] = useState("");

  const refreshRandomFact = () => {
    getRandomFact().then((newFact) => setfact(newFact));
  };
  useEffect(refreshRandomFact, []);

  return { fact, refreshRandomFact };
};