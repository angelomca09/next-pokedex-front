import { PokemonSM } from "@/interface/Pokemon";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pokemon: PokemonSM
}

export default function PokemonTab({ pokemon }: Props) {
  return (
    <Link key={pokemon.name} href={`/${pokemon.pokeDex}`}>
      <span className='flex flex-row items-center justify-start bg-blue-200 border-2 border-slate-600 rounded-md mb-1 ml-6 ease-out duration-200 hover:border-blue-600 hover:mr-6 hover:ml-0' >
        <Image src={`${process.env.baseUrl}/${pokemon.icon}`} alt={`${pokemon.name} icon`} width={100} height={100} className='w-10' />
        <span className="font-medium mr-2">{pokemon.pokeDex}</span>

        <span className="font-medium"> {pokemon.name}</span>
      </span>
    </Link>
  )
}
