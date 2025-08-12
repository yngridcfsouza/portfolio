import React, { useState, useRef, useEffect } from "react";

const FREESOUND_API_KEY = import.meta.env.VITE_FREESOUND_KEY;

export default function AudioPlayer() {
  const [loading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [trackList, setTrackList] = useState<any[]>([]);
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Carregar a lista de sons ao montar o componente
  useEffect(() => {
    async function loadTracks() {
      setLoading(true);
      try {
        const packId = 29160;
        const res = await fetch(
          `https://freesound.org/apiv2/packs/${packId}/sounds/?token=${FREESOUND_API_KEY}&fields=name,previews`
        );
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          alert("Nenhum áudio encontrado nesse pack.");
          return;
        }

        setTrackList(data.results);
      } catch (err) {
        console.error("Erro ao carregar músicas:", err);
        alert("Erro ao carregar músicas");
      } finally {
        setLoading(false);
      }
    }

    loadTracks();
  }, []);

  // Tocar uma música aleatória da lista
  function playRandomTrack() {
    if (trackList.length === 0 || !audioRef.current) return;

    const randomSound = trackList[Math.floor(Math.random() * trackList.length)];
    const audioUrl = randomSound.previews?.["preview-hq-mp3"];

    if (!audioUrl) {
      console.warn("Faixa sem preview disponível", randomSound);
      return;
    }

    audioRef.current.src = audioUrl;
    audioRef.current.muted = muted;
    audioRef.current.play();

    setCurrentTrack(randomSound.name);
  }

  // Quando a música terminar, toca outra aleatória
  function handleEnded() {
    playRandomTrack();
  }

  // Quando o componente carregar a lista, toca a primeira música
  useEffect(() => {
    if (trackList.length > 0) {
      playRandomTrack();
    }
  }, [trackList]);

  function handleUnmute() {
    if (audioRef.current) {
      audioRef.current.muted = false;
      setMuted(false);
      audioRef.current.play();
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {loading ? (
        <span>Carregando músicas...</span>
      ) : (
        <>
          <audio ref={audioRef} controls onEnded={handleEnded} />
          {currentTrack && <span className="text-sm text-gray-700">Tocando: {currentTrack}</span>}
          {muted && (
            <button
              onClick={handleUnmute}
              className="bg-transparent text-white px-4 py-2 rounded hover:bg-red-400 transition"
            >
              Ativar som
            </button>
          )}
        </>
      )}
    </div>
  );
}
