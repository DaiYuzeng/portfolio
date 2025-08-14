import { MainSectionProps } from "@/types/layout"

export default function MainSection( {title, children}: MainSectionProps ) {
  return (
    <section>
      <div className="sticky top-12 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">{title}</h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}