export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grille animee */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neural-bg via-transparent to-neural-bg" />

      {/* Orbes flottantes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neural-cyan/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neural-magenta/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
    </div>
  )
}
