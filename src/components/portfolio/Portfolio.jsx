import React from 'react'
import { useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {

  const [selected ,setSelected] = useState("featured");

  const list =[
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"web App",
      title:"Web App"
    },    {
      id:"Mobile App",
      title:"Mobile App"
    },    {
      id:"Design",
      title:"Design"
    },    {
      id:"Branding",
      title:"Branding"
    }
  ]


  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item,index)=>(
          <PortfolioList key={index} title={item.title} active={selected === item.id} setSelected={setSelected}
          id={item.id}/>
        ))}
      </ul>
      <div className='container'>
        <div className="item">
          <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E" alt=""/>
          <h3>Banking App</h3>
        </div>                                              
      </div>
    </div>
  )
}
