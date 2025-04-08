import { useEffect, useState } from "react";
import { getCatImage } from "../services/cataas.js";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    getCatImage({ fact }).then((newImageUrl) => {
      setImageUrl(newImageUrl);
    });
  }, [fact]);

  return { imageUrl };
}