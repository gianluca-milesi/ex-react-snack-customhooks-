import useSwitch from "./useSwitch";


function App() {

  const [isOn, toggle] = useSwitch();


  return (
    <>
      <h2>Snack 1</h2>
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    </>
  )
}

export default App