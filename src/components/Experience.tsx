import experienceMetaData from "@/data/experience"

import Panel from "@/components/Panel"
import TagList from "@/components/TagList"

import { ExperienceMeta } from "@/types/components"
import { useTranslations } from "next-intl";

export default function ExperienceSection() {
  const t = useTranslations('section.experience');

  return (
    <>
      {experienceMetaData.map((item: ExperienceMeta) => {
        const base: string = `items.${item.id}`;
      
        return (
          <Panel key={item.id} title={`${t(`${base}.position`)} • ${t(`${base}.company`)}`} description={t(`${base}.description`)} linkTo={item.companyUrl ?? '#'} subTitle={item.period}>
            {
              item.skills && item.skills.length > 0 ? <TagList labelList={item.skills ?? []} /> : null
            }
          </Panel>
        )
      })}
    </>
  )
}