/* 
* Panel component(shell) for basic hover/blur animation
* 
*/
import { PanelProps } from "@/types/components";

export default function Panel({ title, subTitle, description, linkTo, children }: PanelProps) {
  return (
    <ol className="group/list">
      <li className="mb-12 ">
        <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <div className="absolute z-0 -inset-x-4 -inset-y-4 rounded-md transition motion-reduce:transition-none hidden lg:block md:-inset-x-6 lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <header className="z-10 mb-2 text-xs tracking-wide text-slate-500 font-semibold sm:col-span-2">{subTitle}</header>
          <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate-200">
              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href={linkTo} target="_blank" rel="noreferrer noopener">
                <span className="absolute hidden rounded -inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                {title}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block w-4 h-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </h3>
            <p className="mt-2 text-sm leading-normal">{description}</p>
            {children}
          </div>
        </div>
      </li>
    </ol>
  )
}