import nlwUnitIcon from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUnitIcon} />
      <nav className="flex items-center gap-5 text-zinc-300">
        <a href="" className="font-medium text-sm">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </div>
  );
}
