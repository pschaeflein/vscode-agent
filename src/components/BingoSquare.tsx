import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex min-h-[62px] select-none items-center justify-center rounded-lg border p-1.5 text-center text-[11px] leading-tight transition-all duration-200 sm:min-h-[68px] sm:rounded-xl sm:text-xs';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-winning-border bg-winning text-[#654b15] shadow-[inset_0_0_0_1px_rgb(255,255,255,0.3)]'
      : 'border-marked-border bg-marked text-[#1e4f65] shadow-[inset_0_0_0_1px_rgb(255,255,255,0.35)]'
    : 'border-accent/18 bg-surface text-ink hover:border-accent/38 active:bg-surface-strong';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-display text-base tracking-wide text-accent shadow-[inset_0_0_0_1px_rgb(13,79,115,0.14)]'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1 top-1 text-[10px] font-bold text-accent sm:text-xs">✓</span>
      )}
    </button>
  );
}
