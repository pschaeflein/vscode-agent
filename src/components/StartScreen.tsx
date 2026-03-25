interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full items-center justify-center overflow-hidden px-6 py-10">
      <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-transparent to-accent/8" />

      <div className="relative w-full max-w-md text-center animate-[fadeIn_650ms_ease-out]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-accent/80 animate-[slideUp_650ms_ease-out_120ms_both]">
          Harbor Social Series
        </p>
        <h1 className="mb-2 font-display text-5xl leading-none text-ink animate-[slideUp_650ms_ease-out_200ms_both] sm:text-6xl">
          Yacht Club Mixer
        </h1>
        <p className="mx-auto mb-8 max-w-xs text-sm font-medium text-muted animate-[slideUp_650ms_ease-out_280ms_both] sm:text-base">
          Trade stories, find your crew, and claim your line before the bell.
        </p>

        <div className="mb-8 rounded-2xl border border-accent/20 bg-surface/90 p-6 text-left shadow-[0_20px_45px_-28px_rgb(18,38,58,0.75)] backdrop-blur-sm animate-[slideUp_650ms_ease-out_360ms_both]">
          <h2 className="mb-3 font-display text-2xl text-ink">Deck Rules</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted">
            <li>• Meet someone who fits a square and mark it.</li>
            <li>• Keep moving, every chat can unlock your board.</li>
            <li>• First five in a line earns bragging rights.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full rounded-xl bg-accent px-8 py-4 text-base font-semibold tracking-wide text-white shadow-[0_16px_30px_-16px_rgb(13,79,115,0.95)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-light active:translate-y-0 active:bg-accent-light animate-[slideUp_650ms_ease-out_440ms_both] sm:text-lg"
        >
          Board the Mixer
        </button>
      </div>
    </div>
  );
}
