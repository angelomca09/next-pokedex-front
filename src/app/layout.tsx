import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'
import getAllPokemons from '@/libs/getAllPokemons'
import PokemonTab from '@/components/PokemonTab'
import Image from 'next/image'

import pokebalSVG from "../assets/pokeball.svg"

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'NextDex',
  description: 'A Pokedex created with NextJS',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {


  const pokemons = await getAllPokemons(0, 151);


  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-gray-800 flex items-center justify-center h-screen w-screen`}>
        <div className='w-[750px] max-w-2xl p-10 rounded-2xl bg-red-600 shadow-xl border-4 border-red-700'>

          <div className='flex relative overflow-hidden items-center justify-between flex-row bg-yellow-200 border-2 border-stone-950 rounded-md shadow-white shadow-inner'>

            {children}

            <Image className='pokeball-svg' src={pokebalSVG} alt='Pokeball' />

            <div className='z-10 overflow-y-scroll h-80 py-4 px-2 flex flex-col w-2/4'>
              {pokemons.map(pokemon => (
                <PokemonTab key={pokemon.pokeDex} pokemon={pokemon} />
              ))}
            </div>


          </div>

        </div>
      </body>
    </html>
  )
}
