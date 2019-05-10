import React from 'react'
import Cell from './Cell'
import '../styles/Board.css'

export default function Board({onClick,board,boardRef,turn}) {
  return (
    <div className="board">
        {  
             board.map((row,key1)=>
               <div key={key1} className="row">
                   {
                        row.map((val,key2)=>
                        <Cell key={key2} onClick={onClick} x={key1}  y={key2} value={val} turn={turn} referance={boardRef[key1][key2]}/>
                      )
                   }
               </div>
               )
        }
    </div>
  )
}