import React from 'react'

const list = [ {
    id: 0,
    label: 'eat'
},
{
    id: 1,
    label: 'sit'
}];

function Todos() {
  return (
    <div>
        <h1>These are your tasks for today</h1>
        <ol>
            {list.map((list, index)=>(
                <li>{list.label}</li>
            ))}
        </ol>
    </div>
  )
}

export default Todos