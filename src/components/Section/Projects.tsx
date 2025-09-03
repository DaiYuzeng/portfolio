import projectsMetaData from "@/data/projects"

import Panel from "@/components/Panel"
import Link from "next/link"
import { Star, Building2, Download } from "lucide-react";

import { ProjectMeta } from "@/types/components"
import { useTranslations } from "next-intl";

const IconsMap: {[key: string]: React.ElementType} = {
  Star: Star,
  Building2: Building2,
  Download: Download
}

export default function ExperienceSection() {
  const t = useTranslations('section.projects');

  return (
    <>
      {projectsMetaData.map((item: ProjectMeta) => {
        const base: string = `items.${item.id}`;
        {/* We can use optimized <Image /> component in Next.js here */}
        {/* But we can dive deeper into what has Next.js done in its <Image /> */}
        const thumbnail: React.ReactNode = (
          <img
              src={item.imgUrl}
              width={200}
              height={48}
              alt={`project ${t(`${base}.title`)} thumbnail`}
              className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
        )
      
        return (
          <Panel key={item.id} title={t(`${base}.title`)} description={t(`${base}.description`)} linkTo={item.link} thumbnail={thumbnail}>
            {
              item.externalLinks?.map((link) => {
                const Icon = IconsMap[link.icon];

                return (
                  <Link href={link.url} key={link.url} target="_blank" rel="noreferrer noopener" className="project-external-link relative inline-flex items-center mr-2 mt-2 text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300">
                    <Icon className="w-3 h-3 mr-1" />{link.title}
                  </Link>
                )
              })
            }
          </Panel>
        )
      })}
    </>
  )
}