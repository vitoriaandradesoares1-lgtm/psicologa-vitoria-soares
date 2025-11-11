import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 header-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-lg font-semibold">Psicóloga Vitória A. Soares</div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="/" className="hover:text-primary">Início</a>
          <a href="/sobre" className="hover:text-primary">Sobre</a>
          <a href="/tcc" className="hover:text-primary">Terapia</a>
          <a href="/areas" className="hover:text-primary">Áreas</a>
          <a href="/contato" className="hover:text-primary">Contato</a>
          <a href="https://wa.me/5511982360341" target="_blank" rel="noreferrer" className="ml-4 bg-indigo-200 px-4 py-2 rounded-full">Agende sua sessão</a>
        </div>
        <div className="md:hidden">
          <a href="https://wa.me/5511982360341" target="_blank" rel="noreferrer" className="bg-indigo-200 px-3 py-2 rounded-full">Agendar</a>
        </div>
      </nav>
    </header>
  )
}
