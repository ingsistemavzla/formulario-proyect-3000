import { useEffect, useState } from 'react'

interface CuposProgressProps {
  current?: number
  total?: number
}

export function CuposProgress({ current = 2, total = 30 }: CuposProgressProps) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100))
  const [displayPct, setDisplayPct] = useState(0)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setDisplayPct(pct)
    })
    return () => cancelAnimationFrame(id)
  }, [pct])

  return (
    <div className="rounded-xl border border-neutral-200 bg-gradient-to-r from-neutral-50 to-indigo-50/40 px-4 py-4 sm:px-5 sm:py-5 shadow-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Disponibilidad</span>
        <span className="text-base sm:text-lg font-semibold text-neutral-900 tabular-nums">
          {current} / {total} cupos
        </span>
      </div>
      <div
        className="h-3 w-full overflow-hidden rounded-full bg-neutral-200/90"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${current} de ${total} cupos asegurados`}
      >
        <div
          className="h-full rounded-full bg-indigo-600 ease-out motion-reduce:transition-none"
          style={{
            width: `${displayPct}%`,
            transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            boxShadow: displayPct > 0 ? '0 0 20px rgba(79, 70, 229, 0.35)' : undefined,
          }}
        />
      </div>
    </div>
  )
}
