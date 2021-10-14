import Navigation from '../components/Navigation';

import Link from 'next/link'

export default function App() {
  const [a,b] = [1,4];
  const header = <h1>Component como funcao</h1>

  return (
    <div>
      <Link href="/estilo">Rota estiloso</Link>
      { header }
      <p>{ a + b }</p>

      <Navigation path="/estilo" title="Rota" />
    </div>
  )
}