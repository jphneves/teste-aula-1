export default function App() {

  async function getConselho() {
    const botao1 = await fetch("https://api.adviceslip.com/advice");
    const data = await botao1.json()
    console.log(data);
  }

  return (
    <div>
      <h1>Teste</h1>
      <button onClick={getConselho}>Botao</button>
    </div>
  );
}