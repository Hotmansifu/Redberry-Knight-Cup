import vector from "../images/Vector.png"
import rocket from "../images/Succsess_rocket.png"

import "../styles/onBoardingPage.css"

import React from "react"

export default function OnBoardingPage() {
    return (
        <> 
            <div className="container">
                <div className="subContainer1">
                    <div className="block">
                        <img className="crownpng" src={vector} />
                        <h1>Redberry Knight Cup</h1>
                    </div>
                </div>
                <div className="subContainer6">
                </div>
                <div className="subContainer7">
                    <div className="SuccesRocket">
                        <img src={rocket} alt="Succsess Rocket" />
                    
                    <h2 className="onboardingcompl"><b>Onboarding completed!</b></h2>
            
                </div>
                </div>
            </div>
        </>
    )
}