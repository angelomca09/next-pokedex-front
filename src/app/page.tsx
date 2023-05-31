import interrogationSVG from "../assets/interrogation.svg"
import Image from "next/image"

export default function Home() {


  return (
    <div className="z-10 flex items-center justify-start flex-col h-80 p-4 gap-4 ">
      <div className="flex flex-row items-center justify-start w-full px-3 h-8">
        <span className="font-bold text-2xl">Select a Pokémon</span>
      </div>
      <div className="aspect-square h-48 w-56 flex items-center justify-center bg-stripes border-4 border-slate-500 rounded-md">

        <Image src={interrogationSVG} alt={"Undefined Pokémon"} width={100} height={100} className="aspect-square w-40 interrogation-svg" />

      </div>
    </div>
  )
}
