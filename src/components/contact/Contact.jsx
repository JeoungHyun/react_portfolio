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
                <img src="assets/shake.svg" alt=""></img>
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">send</button>
                    {sendClick && <span>눌러주셔서 감사합니다.</span>}
                </form>
            </div>
        </div>
    )
}