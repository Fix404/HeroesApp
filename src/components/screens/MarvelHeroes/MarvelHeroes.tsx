import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes";
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";


export const MarvelHeroes = () => {
  const [heros, setHeros] =useState<IHeroes[]>([]);

  const  handleGetMarvelHeros= () => {
    const result=heroesData.filter((hero) => hero.publisher === "Marvel Comics");
    setHeros(result);
  };

  useEffect(() => {
    handleGetMarvelHeros();
  })
  return (
    <ListHeroes heroes={heros} title="Héroes de Marvel" />
  )
}
