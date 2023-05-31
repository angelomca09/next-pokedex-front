import getPokemon from "@/libs/getPokemon"
import { getTypeColor } from "@/utils/getTypeColor"
import Image from "next/image"

interface Params {
  params: { id: string }
}

export default async function PokemonPage({ params: { id } }: Params) {

  const pokemon = await getPokemon(id)

  const url = `${process.env.baseUrl}/${pokemon.url}`

  return (
    <div className="z-10 flex items-center justify-center flex-col h-80 p-4 gap-4 ">
      <div className="flex flex-row items-center justify-start w-full px-3 h-8">
        <span className="rounded-full bg-neutral-800 text-white font-bold py-0.5 px-2 mr-2">{pokemon.pokeDex}</span>
        <span className="font-bold text-2xl">{pokemon.name}</span>
      </div>
      <div className="aspect-square h-48 w-56 flex items-center justify-center bg-stripes border-4 border-slate-500 rounded-md">

        <Image src={url} alt={pokemon.name} width={100} height={100} className="aspect-square w-40" />

      </div>
      <div className="h-8 flex flex-row items-center justify-between" >
        {pokemon.types.reverse().map((type: string) => {
          const color = getTypeColor(type)
          return (
            <span key={type} className={`${color} type-lable mx-2 px-4 rounded-full border border-solid border-black uppercase text-white`}>
              {type}
            </span>
          )
        })}
      </div>
    </div>
  )
}
