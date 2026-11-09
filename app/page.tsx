const names = ["Maximinao", "Gatinho", "Lulu", "Miki"];

export default function Page() {
  return (
    <ul className="list-none text-center text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase tracking-[0.08em] leading-[1.4]">
      {names.map((name, i) => (
        <li
          key={name}
          className="animate-fade-up opacity-0"
          style={{ animationDelay: `${(10 + i * 15) / 100}s` }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
