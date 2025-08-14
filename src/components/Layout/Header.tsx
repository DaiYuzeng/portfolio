import Switcher from "@/components/Switcher"

export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="flex justify-between items-center h-12 px-4 bg-slate-800">
        <p>Yuzeng</p>
        <ul className="flex align-center gap-4">
          <li><Switcher /></li>
        </ul>
      </div>
    </header>
  )
}
