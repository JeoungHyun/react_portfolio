import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={"menu "+ (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#portfolio'>My Skills</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#works'>My Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#testmonials'>My Motto</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
