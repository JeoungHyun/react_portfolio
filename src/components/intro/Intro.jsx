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
      strings:['React로 만들어 본 포트폴리오 사이트입니다.']
    })
  },[])


  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src="https://jeounghyun.github.io/react_portfolio/assets/me.jpg"></img>
        </div>
      </div>
      <div className='right'>
        <div className="wrapper">
          <h2>안녕하세요!</h2>
          <h1>조정현입니다.</h1>
          <h3><span ref={textRef}></span></h3>
          <a href='#portfolio'>
          <img src="https://jeounghyun.github.io/react_portfolio/assets/down.png" alt=""/>
        </a>
        </div>

      </div>
    </div>
  )
}
