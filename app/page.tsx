export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-sky-950 via-sky-900 to-blue-950 flex items-center justify-center font-sans">
      <div className="text-center px-8">
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M12 52L32 8l20 44H12z" fill="#0078D4" opacity="0.9" />
            <path d="M12 52l20-14 20 14H12z" fill="#50E6FF" opacity="0.8" />
          </svg>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-medium px-4 py-1.5 rounded-full mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
          Deployment Successful
        </div>
      </div>
    </div>
  );
}
