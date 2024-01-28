import Random from "./Random";
function MyButton(){
    const Action = () => {
        return <Random/>
    }
  return (
  <>
    <button onClick={Action}>SUBMIT</button>
   
  </>
    ) 
}

export default MyButton;