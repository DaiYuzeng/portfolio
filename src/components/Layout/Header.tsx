import LocaleSwitcher from "@/components/LocaleSwitcher"

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center h-12 px-4 bg-slate-800">
        <p>Yuzeng</p>
        <ul className="flex align-center gap-4">
          <li><LocaleSwitcher /></li>
        </ul>
      </div>
    </header>
  )
}
