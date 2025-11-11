import Navbar from '../components/Navbar'

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 max-w-5xl mx-auto px-6 pb-24">
        <section className="bg-white rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 flex justify-center">
            <img src="/vitoria-foto.jpg" alt="Vitória Andrade Soares" className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl shadow-lg border-2 border-indigo-50" />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">Psicóloga Vitória A. Soares — CRP 06/218787</h2>
            <h3 className="text-lg italic text-indigo-700 mb-4">Acolher, compreender e transformar — um passo de cada vez.</h3>
            <p className="mb-4"><strong>Olá, meu nome é Vitória Andrade Soares</strong>, psicóloga com ênfase em Terapia Cognitivo-Comportamental (TCC).</p>
            <p className="mb-4">Meu propósito é ajudar pessoas a compreenderem seus pensamentos e emoções, desenvolvendo uma vida mais leve e equilibrada.</p>
            <a href="https://wa.me/5511982360341" target="_blank" rel="noreferrer" className="inline-block bg-indigo-200 px-5 py-3 rounded-full mt-2">Agende sua consulta</a>
          </div>
        </section>
      </main>
    </div>
  )
}
