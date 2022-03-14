import React from "react";
import { useState } from "react";
import "./contact.scss"

export default function Contact() {


    const [sendClick ,setSendClick] = useState(false);


    const handleSubmit = (e) =>{
        e.preventDefault();
        setSendClick(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://jeounghyun.github.io/react_portfolio/assets/shake.svg" alt=""></img>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">send</button>
                    {sendClick && <span>기능 준비중입니다 :)</span>}
                    <h3>연락처 : 010-4564-3239</h3>
                    <h3>이메일 : cho3153238@naver.com</h3>
                </form>
            </div>
        </div>
    )
}