import Navbar from '../components/Navbar'

export default function Contato() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 max-w-3xl mx-auto px-6 pb-24">
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contato</h2>
          <p className="mb-2"><strong>Telefone/WhatsApp:</strong> <a href="https://wa.me/5511982360341" target="_blank" rel="noreferrer">11 98236-0341</a></p>
          <p className="mb-2"><strong>E-mail:</strong> <a href="mailto:psi.vitoriaasoares@gmail.com">psi.vitoriaasoares@gmail.com</a></p>
          <p className="mb-4"><strong>Instagram:</strong> <a href="https://www.instagram.com/psi.vitoriaasoares" target="_blank" rel="noreferrer">@psi.vitoriaasoares</a></p>

          <div className="mt-6 p-4 border-l-4 border-indigo-200 bg-indigo-50 rounded">
            <h3 className="font-semibold mb-2">⚠️ Atenção</h3>
            <p className="text-sm">Este site não oferece atendimento imediato a pessoas em crise suicida. Em caso de crise, entre em contato com o CVV – 188 (ligação gratuita e confidencial). Em situações de emergência, procure o hospital mais próximo. Havendo risco de morte, ligue imediatamente para o SAMU – 192.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
