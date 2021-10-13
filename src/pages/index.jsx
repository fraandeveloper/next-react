export default function App() {
  const [a,b] = [1,4];
  const header = <h1>Component como funcao</h1>

  return (
    <div>
      { header }
      <p>{ a + b }</p>
    </div>
  )
}