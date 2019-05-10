import React from 'react'
import '../styles/Cell.css'
export default ({onClick,x,y,value,turn,referance})=>{
  return (
      <div className="cell-btn"  id={`cell-btnx-${x}`} ref={referance} onClick={()=>turn && onClick({x,y})}>
      <label className={value}>{value}</label>
      </div>
  )
}
