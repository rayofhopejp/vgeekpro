type SectionHeaderAttributes = {
  isDark?: boolean;
  title: string | React.ReactNode,
  description: string | React.ReactNode,
  titleClass?: string,
  descriptionClass?: string
  titleColor?: string,
  descriptionColor?: string,
}

export default function SectionHeader({title, description, titleClass, descriptionClass, isDark, titleColor, descriptionColor}: SectionHeaderAttributes) {
  return (
    <div className="mb-14 text-center" data-aos="fade-down" data-aos-duration="2000">
      <div className={titleClass ?? `font-bold text-3xl${(titleColor !== undefined) ? ` text-${titleColor}` : ""}`}>{title}</div>
      <div className={descriptionClass ?? `text-sm ${((descriptionColor !== undefined) ? `text-${descriptionColor}` : (isDark ?? false) ? "text-rose-300" : "text-rose-600")}`}>{description}</div>
    </div>
  )
}
