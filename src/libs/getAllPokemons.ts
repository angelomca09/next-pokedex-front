import { PokemonSM } from "@/interface/Pokemon";
import { api } from "./api";

export default async function getAllPokemons(page = 0, maxResults = 15): Promise<PokemonSM[]> {
  const result = await api.get(`${process.env.baseUrl}/pokemons?page=${page}&maxResults=${maxResults}`)
  return result.data
}