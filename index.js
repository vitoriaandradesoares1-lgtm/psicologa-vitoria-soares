import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-illustration">
      <Navbar />
      <main className="pt-28 max-w-5xl mx-auto px-6 pb-24">
        <section className="bg-white/80 rounded-2xl p-8 shadow-md">
          <h1 className="text-3xl font-semibold mb-2">Vitória Andrade Soares</h1>
          <p className="text-sm mb-4">Psicóloga Clínica | CRP 06/218787</p>
          <blockquote className="italic text-lg mb-6">“Quando você muda a forma de olhar para si mesmo, sua vida começa a mudar também.”</blockquote>
          <p className="mb-6">Meu propósito é te ajudar a encontrar mais equilíbrio, leveza e bem-estar emocional por meio da Terapia Cognitivo-Comportamental. Atendimento online para adolescentes e adultos.</p>
          <a href="https://wa.me/5511982360341" target="_blank" rel="noreferrer" className="inline-block bg-indigo-200 px-5 py-3 rounded-full">Agende sua sessão</a>
        </section>
      </main>
    </div>
  )
}
