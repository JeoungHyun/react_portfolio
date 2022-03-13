import React from 'react'
import "./intro.scss"
import {init} from 'ityped'
import { useEffect , useRef} from 'react'

export default function Intro() {

  const textRef = useRef();

  useEffect(()=>{
    console.log(textRef);
    init(textRef.current,{
      showCursor : true,
      backSpeed:60,
      backDelay:1500,
      strings:['Use with react!','yeahhhh!!']
    })
  },[])


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src="assets/me.jpg"></img>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>조정현</h2>
          <h1>01045643239</h1>
          <h3>경기도시흥시매화동 <span ref={textRef}></span></h3>
          <a href='#portfolio'>
          <img src="assets/down.png" alt=""/>
        </a>
        </div>

      </div>
    </div>
  )
}
