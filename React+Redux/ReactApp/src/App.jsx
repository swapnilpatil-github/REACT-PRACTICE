import MyButton  from "./components/MyButton"
import Random from "./components/Random";
function App() {
  let name = 'swapnil';

  return (
    <>
      <h1>HELLO FROM REACT I AM {name} </h1>
      <MyButton></MyButton>

      <Random></Random>
    </>
  )
}

export default App
