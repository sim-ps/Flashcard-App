import { useEffect, useState } from "react";
import data from "../data.json";

const STORAGE_KEY = "flashcards";

function readFlashcards() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : data.flashcards;
  } catch {
    return data.flashcards;
  }
}

export function useFlashcards() {
  const [flashcards, setFlashcards] = useState(readFlashcards);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flashcards));
  }, [flashcards]);

  return [flashcards, setFlashcards];
}
