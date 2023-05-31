export interface PokemonSM {
  id: string
  name: string
  pokeDex: string
  icon: string
}

export interface Pokemon extends PokemonSM {
  url: string
  hp: number
  attack: number
  defense: number
  spAtk: number
  spDef: number
  speed: number
  total: number
  types: string[]
}