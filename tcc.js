import Navbar from '../components/Navbar'

export default function TCC() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 max-w-4xl mx-auto px-6 pb-24">
        <section className="rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Terapia Cognitivo-Comportamental (TCC)</h2>
          <p className="mb-4">A TCC é uma abordagem focada em compreender como seus pensamentos, emoções e comportamentos se relacionam. A partir dessa compreensão, é possível transformar padrões que causam sofrimento e desenvolver novas formas de enfrentamento mais saudáveis.</p>
          <p>Com um processo colaborativo e acolhedor, você aprende a ser agente ativo da sua própria mudança.</p>
        </section>
      </main>
    </div>
  )
}
