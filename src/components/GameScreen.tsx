import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex min-h-full flex-col px-4 pb-6 pt-4 sm:px-6">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between rounded-2xl border border-accent/20 bg-surface/88 px-3 py-2 shadow-[0_20px_45px_-34px_rgb(18,38,58,0.9)] backdrop-blur-sm sm:px-4">
        <button
          onClick={onReset}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:bg-accent/10 active:bg-accent/15"
        >
          Port
        </button>
        <h1 className="font-display text-2xl tracking-wide text-ink sm:text-3xl">Yacht Club Bingo</h1>
        <div className="w-14 text-right text-[10px] font-semibold uppercase tracking-[0.24em] text-accent/65 sm:w-16">Deck</div>
      </header>

      {/* Instructions */}
      <p className="mx-auto w-full max-w-xl py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted sm:text-sm">
        Mark a square each time you find someone who fits it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="mx-auto mb-3 w-full max-w-xl rounded-xl border border-winning-border/45 bg-winning/60 py-2 text-center text-sm font-semibold tracking-wide text-[#6f531b] animate-[fadeIn_420ms_ease-out]">
          Signal fired. Your crew just made a line.
        </div>
      )}

      {/* Board */}
      <div className="flex flex-1 items-center justify-center pt-1">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
