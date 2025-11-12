import { useEffect, useMemo, useState } from 'react'
import { BookOpen, Flame, Handshake, SearchCode, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { useAudio } from '../context/AudioContext'

export default function AboutPage() {
  const { muted, toggleMute } = useAudio()
  const audioOn = !muted
  const [enter, setEnter] = useState(false)

  // Ativa o fade-in por componente ao montar a página
  useEffect(() => {
    const id = requestAnimationFrame(() => setEnter(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const title = useMemo(() => 'Sobre Mim', [])

  const toggleAudio = () => {
    toggleMute()
  }

  return (
    <main className="min-h-screen w-full bg-current dark:bg-[#15100e] text-terra-escuro dark:text-terra-claro transition-colors duration-500">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h1>
          <button
            type="button"
            onClick={toggleAudio}
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm bg-white/70 dark:bg-black/40 hover:bg-white/90 dark:hover:bg-black/60 backdrop-blur-md shadow transition-colors"
            aria-label={audioOn ? 'Desativar música' : 'Ativar música'}
            title={audioOn ? 'Desativar música' : 'Ativar música'}
          >
            {audioOn ? (
              <Volume2 size={16} className="text-terra-escuro dark:text-terra-claro" />
            ) : (
              <VolumeX size={16} className="text-terra-escuro dark:text-terra-claro" />
            )}
            <span className="text-terra-escuro dark:text-terra-claro">
              Música {audioOn ? 'on' : 'off'}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <div className={`w-full h-64 sm:h-72 lg:h-full min-h-[260px] rounded-xl overflow-hidden shadow-lg bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-black/10 dark:border-white/20 transition-all duration-500 ease-out ${enter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} delay-100 flex items-center justify-center`}>
              <img
                src={`${import.meta.env.BASE_URL}assets/formal.jfif`}
                alt="Minha foto ou avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Cartões Missão e Valores */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`rounded-lg p-4 bg-white/70 dark:bg-black/60 border border-black/10 dark:border-white/20 shadow transition-all duration-500 ease-out ${enter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} delay-200`}>
                <h3 className="text-sm font-semibold mb-1 text-terra-escuro dark:text-terra-claro">Missão</h3>
                <p className="text-xs sm:text-sm text-justify">
                  Inspirar pessoas e ser referência para elas por meio da tecnologia, da educação e da liberdade financeira.
                  Meu propósito é transformar conhecimento em oportunidades reais, não só para mim.
                </p>
              </div>
              <div className={`rounded-lg p-4 bg-white/70 dark:bg-black/60 border border-black/10 dark:border-white/20 shadow transition-all duration-500 ease-out ${enter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} delay-300`}>
                <h3 className="text-sm font-semibold mb-1 text-terra-escuro dark:text-terra-claro">Valores</h3>
                <p className="text-xs sm:text-sm">
                  Acredito que crescer não é apenas conquistar, mas compartilhar o caminho.
                  Autenticidade, aprendizado constante e empatia são os pilares que guiam todas as minhas escolhas, mantendo o equilíbrio entre o progresso profissional e o bem-estar pessoal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto de apresentação abaixo do topo */}
        <article className={`mt-6 rounded-xl bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-black/10 dark:border-white/20 shadow-lg p-5 sm:p-6 transition-all duration-500 ease-out ${enter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} delay-400`}>
          <h2 className="text-lg sm:text-xl font-medium mb-3 text-terra-escuro dark:text-terra-claro">Apresentação</h2>
          <div className="text-sm sm:text-base leading-relaxed">
            <p>Olá, eu sou Yngrid Ferreira, desenvolvedora full stack júnior e tenho brilho nos olhos quando trabalho com código.</p>
            <Sparkles className="my-4" />
            <p>
            Desenvolvo softwares há mais de 01 ano utilizando JavaScript, TypeScript, SQL, Python, Node.js, Docker e APIs REST, explorando cada camada da tecnologia — do front ao back — com foco em criar experiências que realmente façam sentido para as pessoas.
            </p>
            <Flame className="my-4" />
            <p>
            Sou certificada em Python, SQL, Excel, Python e Node.js, e tenho experiência sólida em desenvolvimento web, o que me permite unir o olhar técnico ao pensamento estratégico.
            </p>
            <BookOpen className="my-4" />
            <p>
            Além da área técnica, trago comigo uma bagagem humana valiosa: 6 anos como recepcionista e uma expriência internacional como tradutora me ensinaram a importância da comunicação, da empatia e da colaboração. Essas experiências moldaram meu jeito de trabalhar — com paciência, clareza e atenção aos detalhes.
            </p>
            <Handshake className="my-4" />
            <p>
            Sou curiosa por natureza e adoro aprender coisas novas — seja sobre tecnologia, investimentos ou desenvolvimento pessoal. Também sou mãe da Alice, o que me inspira todos os dias a buscar evolução constante e construir um futuro sólido e criativo.
            </p>
            <SearchCode className="my-4" />
            <p>
            Atualmente, estou desenvolvendo projetos próprios, como um micro-SaaS de check-in express para hotéis e dashboards financeiros integrados com APIs, unindo dados, design e automação.
            Meu objetivo é seguir crescendo como desenvolvedora para sistemas de integração de APIs RestFul e GraphQL, criando soluções que simplifiquem a vida das pessoas e conectem propósito à tecnologia.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}
