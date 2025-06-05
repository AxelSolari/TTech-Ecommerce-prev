import { TrashIcon } from "@heroicons/react/24/solid"

export default function ButtonDelete({deleteProduct}) {
  return (
    <button
        className="flex gap-2 items-center cursor-pointer outline-0 hover:ring-1 hover:ring-fuchsia-600 rounded px-2 transition-all"
        onClick={deleteProduct}
    >
        <p>Eliminar</p>
        <TrashIcon className="w-4 h-4 text-red-600" />
    </button>
    )
}
