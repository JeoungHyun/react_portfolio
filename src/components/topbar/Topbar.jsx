import React from 'react'
import './topbar.scss'
import {Person , Mail} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className='wrapper'>
            <div className='left'>
                <a href='#intro' className='logo'>JH.</a>
                <div className='itemContainer'>
                <span className='icons'>010-4564-3239</span>
                </div>                          
                <div className='itemContainer'>
                <span className='icons'>cho3153238@naver.com</span>
                </div>            
            </div>
            <div className='right'>
                <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}
