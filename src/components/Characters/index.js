import { useContext } from "react";
import { CharactersContext } from "../../Contexts/CharactersContext";



export function Characters() {
  const characters = useContext(CharactersContext);
  console.log(characters)
  return (
    <h1>Characters Component</h1>
  );
};