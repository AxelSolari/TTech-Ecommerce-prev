import { PencilSquareIcon } from "@heroicons/react/24/solid"

export default function ButtonEdit() {
  return (
    <button
        className="flex gap-2 items-center cursor-pointer outline-0 hover:ring-1 hover:ring-slate-600 rounded px-2 transition-all"
    >
        <p>Editar</p>
        <PencilSquareIcon className="w-4 h-4 text-slate-600" />
    </button>
    )
}
