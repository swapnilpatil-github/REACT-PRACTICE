import React, { useState } from 'react'
import styles from "./App.module.css"
import Display from './Display'
import Button from "./Button"

function App() {
  let [calValue , setCalValue] = useState("")
  const onButtonClick = (button) => {
    if(button === 'C'){
      setCalValue("")
    }
    else if (button === '=') {
      try {
        const result = eval(calValue);
        setCalValue(result);
      } catch (error) {
        // Handle invalid expressions or errors here
        console.error('Error evaluating expression:', error);
        setCalValue('Error');
      }
    } 
    else{
      const newCalValue = calValue + button;
      setCalValue(newCalValue)
    }
  }
  return (
   <center>
   <div className={styles.main}>
   <Display displayValue = {calValue}/>
   
   <div className={styles.buttonsContainer}>
    <Button onButtonClick = {onButtonClick}/>
   </div>
   </div>

 
  
   </center>
  )
}

export default App