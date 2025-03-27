export default function SectionTitle({ children }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-text-dark tracking-tight mb-2">
        {children}
      </h2>
      <div className="h-1 w-1/5 bg-accent rounded-full mx-auto" />
    </div>
  )
}
