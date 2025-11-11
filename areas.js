import Navbar from '../components/Navbar'

const areas = [
  { title: 'Ansiedade', desc: 'Estratégias para lidar com pensamentos acelerados e sintomas físicos.' },
  { title: 'Depressão', desc: 'Apoio para reconhecer e ressignificar sentimentos de desânimo.' },
  { title: 'Autoestima', desc: 'Desenvolvimento de uma visão mais compassiva sobre si.' },
  { title: 'Luto', desc: 'Acolhimento e reconstrução emocional diante da perda.' },
  { title: 'Estresse', desc: 'Técnicas para gerenciar pressões e melhorar a qualidade de vida.' },
  { title: 'Relacionamentos', desc: 'Trabalho sobre padrões, comunicação e vínculos saudáveis.' },
]

export default function Areas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-28 max-w-5xl mx-auto px-6 pb-24">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map(a => (
            <div key={a.title} className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold mb-2 text-indigo-700">{a.title}</h3>
              <p className="text-sm text-gray-600">{a.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
