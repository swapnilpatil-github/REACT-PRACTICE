import React from 'react'
import styles from "./Display.module.css"

function Display({displayValue}) {
   
  return (
    <div>
        <input type='text' readOnly className={styles.display} value={displayValue}
        
        ></input>
    </div>
  )
}

export default Display