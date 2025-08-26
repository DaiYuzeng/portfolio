import { useTranslations } from "next-intl"

export default function AboutSection() {
  const t = useTranslations('section.about')

  return (
    <>
      <p className="mb-4">{t('whoami')}</p>
      <p className="mb-4">{t('recent')}</p>
      <p className="mb-4">{t('past')}</p>
      <p className="mb-4">{t('leisure')}</p>
    </>
  )
}