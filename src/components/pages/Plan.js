import React from 'react';
import './Plan.css'
function Plan(props) {
//  const arr = props.p
 return <>
  <li className="shadow3">{props.value}</li>
  <button className="btn4" onClick={() => { props.sendData(props.id) }}>X</button>
 </>
}

export default Plan;