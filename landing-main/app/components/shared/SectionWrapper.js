export default function SectionWrapper({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`pt-16 pb-20 px-4 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </section>
  )
}
