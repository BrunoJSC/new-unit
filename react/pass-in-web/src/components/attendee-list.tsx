import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center ">
        <h1 className="text-xl font-bold ">Participantes</h1>
        <div className="px-3 py-1.5 w-72 border border-white/10 rounded-lg text-sm flex items-center gap-2">
          <Search className="size-4 text-emerald-300" />
          <input
            placeholder="Buscar participante..."
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm"
          />
        </div>
      </div>
      <div className="border  border-white/10 rounded-lg">
        <table className="w-full rounded-lg">
          <thead>
            <tr className="border boder-b border-white/10">
              <th className="py-3 px-2.5  text-sm font-semibold text-left">
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </th>
              <th className="py-3 px-2.5  text-sm font-semibold text-left">
                Codigo
              </th>
              <th className="py-3 px-2.5  text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-2.5  text-sm font-semibold text-left">
                Data de incricao
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-2.5  text-sm font-semibold text-left"
              >
                Data do check-in
              </th>
              <th className="py-3 px-2.5  text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody className="border-b border-white/10">
            <tr className="border-b border-white/10 hover:bg-white/5">
              <td className="py-3 px-2.5  text-sm text-zinc-300">
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </td>
              <td className="py-3 px-2.5  text-sm text-zinc-300">12383</td>
              <td className="py-3 px-2.5  text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    Diego Schell Fernandes
                  </span>
                  <span>diego@rocketseat.com.br</span>
                </div>
              </td>
              <td className="py-3 px-2.5  text-sm text-zinc-300">
                7 dias atras
              </td>
              <td className="py-3 px-2.5  text-sm text-zinc-300">
                3 dias atras
              </td>
              <td className="py-3 px-2.5  text-sm text-zinc-300">
                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                  <MoreHorizontal className="size-4" />
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="py-3 px-2.5 text-sm text-zinc-300">
                Nostrando 10 de 228 items
              </td>
              <td
                colSpan={3}
                className="py-3 px-2.5 text-sm text-zinc-300 text-right"
              >
                <div className="inline-flex items-center gap-1.5">
                  <span>Pagina 1 de 25</span>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronLeft className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight className="size-4" />
                  </button>

                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
