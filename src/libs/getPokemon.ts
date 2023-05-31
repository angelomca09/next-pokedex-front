import { Pokemon } from "@/interface/Pokemon";
import { api } from "./api";

export default async function getPokemon(pokemonId: string): Promise<Pokemon> {
  const url = `${process.env.baseUrl}/pokemons/${pokemonId}`
  return (await api.get(url)).data
}