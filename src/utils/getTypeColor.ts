export function getTypeColor(type: string) {
  switch (type.toLocaleLowerCase()) {
    case "bug": return "bg-lime-700"
    case "dark": return "bg-stone-900"
    case "dragon": return "bg-indigo-600"
    case "electric": return "bg-yellow-400"
    case "fairy": return "bg-pink-300"
    case "fighting": return "bg-red-900"
    case "fire": return "bg-red-600"
    case "flying": return "bg-indigo-400"
    case "ghost": return "bg-indigo-900"
    case "grass": return `bg-green-600`
    case "ground": return "bg-orange-200"
    case "ice": return "bg-cyan-200"
    case "normal": return "bg-gray-400"
    case "poison": return "bg-purple-600"
    case "psychic": return "bg-pink-500"
    case "rock": return "bg-orange-300"
    case "steel": return "bg-gray-500"
    case "water": return "bg-blue-600"
    default: return ""
  }
}