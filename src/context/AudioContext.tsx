import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'

type AudioContextValue = {
  muted: boolean
  currentTrack: string | null
  currentTime: number
  duration: number
  isSwitching: boolean
  playRandom: () => Promise<void>
  setMuted: (m: boolean) => void
  toggleMute: () => void
  pause: () => void
  resume: () => Promise<void>
}

interface Track {
  id: number
  name: string
  previews: {
    'preview-hq-mp3'?: string
    'preview-lq-mp3'?: string
    'preview-hq-ogg'?: string
    'preview-lq-ogg'?: string
  }
}

const AudioCtx = createContext<AudioContextValue | undefined>(undefined)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMutedState] = useState(true)
  const [currentTrack, setCurrentTrack] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const [trackList, setTrackList] = useState<Track[]>([])
  const [isSwitching, setIsSwitching] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const switchingRef = useRef(false)

  const FREESOUND_API_KEY: string | undefined = import.meta.env.VITE_FREESOUND_KEY
const PACK_ID = 29160
const FALLBACK_TRACKS: Track[] = [
  {
    id: 1,
    name: 'SoundHelix – Demo 1',
    previews: {
      'preview-hq-mp3': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
  },
]

  useEffect(() => {
    async function loadTracks() {
      try {
        if (!FREESOUND_API_KEY) {
          console.warn('VITE_FREESOUND_KEY ausente, usando faixa de fallback.')
          setTrackList(FALLBACK_TRACKS)
          return
        }
        const res = await fetch(
          `https://freesound.org/apiv2/packs/${PACK_ID}/sounds/?token=${FREESOUND_API_KEY}&fields=id,name,previews`
        )
        if (!res.ok) throw new Error(`Erro ao buscar sons: ${res.status} ${res.statusText}`)
        const data = await res.json()
        if (!data.results || data.results.length === 0) {
          console.warn('Nenhum áudio encontrado no pack, usando fallback.')
          setTrackList(FALLBACK_TRACKS)
          return
        }
        setTrackList(data.results)
      } catch (err) {
        console.error('Erro ao carregar músicas, usando fallback:', err)
        setTrackList(FALLBACK_TRACKS)
      }
    }
    loadTracks()
  }, [])

  async function playRandom() {
    if (switchingRef.current || !audioRef.current || trackList.length === 0) return
    switchingRef.current = true
    setIsSwitching(true)
    const audio = audioRef.current
    const randomTrack = trackList[Math.floor(Math.random() * trackList.length)]
    const audioUrl =
      randomTrack.previews['preview-hq-mp3'] ||
      randomTrack.previews['preview-lq-mp3'] ||
      randomTrack.previews['preview-hq-ogg'] ||
      randomTrack.previews['preview-lq-ogg']
    if (!audioUrl) {
      console.warn('Track sem preview disponível', randomTrack)
      switchingRef.current = false
      setIsSwitching(false)
      return
    }
    audio.src = audioUrl
    audio.muted = muted
    try {
      await audio.play()
      setCurrentTrack(randomTrack.name)
    } catch (err) {
      console.warn('Falha ao reproduzir', err)
    } finally {
      switchingRef.current = false
      setIsSwitching(false)
    }
  }

  function onEnded() {
    if (!switchingRef.current) playRandom()
  }
  function onError() {
    console.error('Erro ao reproduzir a faixa atual. Tentando próxima...')
    playRandom()
  }

  const handleTimeUpdate = () => setCurrentTime(audioRef.current?.currentTime || 0)
  const handleLoadedMetadata = () => setDuration(audioRef.current?.duration || 0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('durationchange', handleLoadedMetadata)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('durationchange', handleLoadedMetadata)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
    }
  }, [trackList, muted])

  useEffect(() => {
    // Compatibilidade com eventos globais existentes
    function onActivate() {
      setMuted(false)
      resume()
    }
    function onDeactivate() {
      setMuted(true)
      pause()
    }
    window.addEventListener('activate-audio', onActivate)
    window.addEventListener('deactivate-audio', onDeactivate)
    return () => {
      window.removeEventListener('activate-audio', onActivate)
      window.removeEventListener('deactivate-audio', onDeactivate)
    }
  }, [])

  function setMuted(m: boolean) {
    const audio = audioRef.current
    if (audio) audio.muted = m
    setMutedState(m)
    // Aplicar ação de reprodução/pausa conforme o mute
    if (m) {
      pause()
    } else {
      resume()
    }
  }
  function toggleMute() {
    setMuted(!muted)
  }
  function pause() {
    const audio = audioRef.current
    if (!audio) return
    try { audio.pause() } catch { /* ignore */ }
  }
  async function resume() {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.src) {
      if (trackList.length === 0) {
        console.warn('Aguardando carregamento das faixas...')
        return
      }
      await playRandom()
    } else {
      try {
        await audio.play()
      } catch (err) {
        console.warn('Falha ao reproduzir após desmutar', err)
      }
    }
  }

  const value: AudioContextValue = useMemo(() => ({
    muted,
    currentTrack,
    currentTime,
    duration,
    isSwitching,
    playRandom,
    setMuted,
    toggleMute,
    pause,
    resume,
  }), [muted, currentTrack, currentTime, duration, isSwitching])

  // Quando as faixas carregarem e estiver desmutado, iniciar reprodução
  useEffect(() => {
    if (trackList.length > 0 && !muted) {
      void resume()
    }
  }, [trackList, muted])

  return (
    <AudioCtx.Provider value={value}>
      {children}
      {/* Elemento de áudio global oculto */}
      <audio id="global-audio" ref={audioRef} playsInline crossOrigin="anonymous" className="hidden" />
    </AudioCtx.Provider>
  )
}

export function useAudio() {
  const ctx = useContext(AudioCtx)
  if (!ctx) throw new Error('useAudio deve ser usado dentro de AudioProvider')
  return ctx
}
