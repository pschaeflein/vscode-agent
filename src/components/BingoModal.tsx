interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061522]/55 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-sm rounded-2xl border border-accent/30 bg-surface p-6 text-center shadow-[0_34px_70px_-36px_rgb(6,21,34,0.95)] animate-[modalDock_520ms_cubic-bezier(0.2,0.8,0.2,1)]">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent/70">Signal Confirmed</p>
        <h2 className="mb-2 font-display text-5xl leading-none text-bingo">Bingo</h2>
        <p className="mb-6 text-sm font-medium text-muted">Your line is locked in. Keep mingling and fill the deck.</p>
        
        <button
          onClick={onDismiss}
          className="w-full rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-accent-light active:bg-accent-light"
        >
          Return to Deck
        </button>
      </div>
    </div>
  );
}
