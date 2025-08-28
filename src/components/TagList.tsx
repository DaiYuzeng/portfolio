import Tag from "@/components/Tag"

export default function TagList({ labelList }: { labelList: string[] }) {
  return (
    <ul aria-label="Skill tags" className="mt-2 mb-2 flex flex-wrap gap-1.5">
      {labelList?.map((label) => (
        <li key={label}><Tag label={label} /></li>
      ))}
    </ul>
  )
}