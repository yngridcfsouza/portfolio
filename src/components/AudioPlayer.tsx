import { useAudio } from "../context/AudioContext";

export default function AudioPlayer() {
  const { currentTrack, currentTime, duration, isSwitching } = useAudio();

  function formatTime(sec: number) {
    if (!sec || Number.isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  return (
    <div className="flex flex-col items-start gap-1 text-terra-escuro dark:text-terra-claro transition-colors">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-terra-vinho dark:text-terra-claro truncate max-w-[14rem]" title={currentTrack ?? undefined}>
          {isSwitching ? 'Trocando…' : `Tocando: ${currentTrack ?? '—'}`}
        </span>
      </div>
      <span className="text-xs text-terra-escuro/80 dark:text-terra-claro/80">
        {formatTime(currentTime)} / {duration ? formatTime(duration) : '—'}
      </span>
    </div>
  );
}
