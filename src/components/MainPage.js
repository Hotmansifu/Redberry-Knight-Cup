import vector from "../images/Vector.png"
import first from "../images/first.png"

import "../styles/mainPage.css"

import React from "react"

export default function MainPage() {

    let rdct = (e) => {
        e.preventDefault();
        localStorage.setItem("page", "2")
        window.location.href = "/"
    }
 
    return (
        <>
            <div className="Container1">
            <div className="block0">
                <img className="crownPic1" src={vector} />
                <h1>Redberry Knight Cup</h1>
            </div>

            <img className="pictureChess" src={first} />

        </div>
        <div className="Container2">
            <div className="subContaner">
                <div className="text">
                    <h1>CHESS SAYS</h1>
                    <p>A LOT ABOUT</p>
                    <h1 className="secondH">WHO WE ARE</h1>
                </div>
                <button className="btncrs" onClick={rdct}>
                    <a>Get Started</a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle"
                        viewbox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </button>
            </div>

        </div>
        </>
    )
}