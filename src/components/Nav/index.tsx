import NavItem from "@/components/Nav/NavItem"

export default function Nav() {
  return (
    <nav className="nav hidden lg:block">
      <ul className="mt-16 w-max">
        <NavItem navKey="about" />
        <NavItem navKey="experience" />
      </ul>
    </nav>
  )
}