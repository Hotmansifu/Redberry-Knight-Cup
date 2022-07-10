import "../styles/regChessExpPage.css"
import Select from 'react-select'
import vector from "../images/Vector.png"
import magnus from "../images/Chess1magnus.png"
import bobby from "../images/Chess2Bobby.png"
import Wilhelm from "../images/Chess3Wilhelm.png"
import Baadur from "../images/Chess4Badur.png"
import React, { useState } from "react"
import axios from "axios"

export default function RegChessExp() {

    let init = {experience_level: "", already_participated: "", character_id: ""}
    const [form, setForm] = useState(init)
    const [sel1, setSel1] = useState("select1")
    const [sel2, setSel2] = useState("select2")
    const [sel3, setSel3] = useState("input")
    let val = true
    let err = {}

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.experience_level.length <= 0) {
            setSel1("select1red")
            val = false
        } else {
            setSel1("select1")
        }

        if (form.already_participated.length <= 0) {
            setSel2("select2red")
            val = false
        } else {
            setSel2("select2")
        }

        if (form.character_id.length <= 0) {
            setSel3("inputred")
            val = false
        } else {
            setSel3("input")
        }

        console.log(val, form)

        if (val == true) {
            axios({
                method: 'post',
                responseType: 'json',
                url: 'https://chess-tournament-api.devtest.ge/api/register',
                data: {
                    name: localStorage.getItem("name"),
                    email: localStorage.getItem("email"),
                    phone: localStorage.getItem("phone"),
                    date_of_birth: localStorage.getItem("date"),
                    experience_level: form.experience_level,
                    already_participated: form.already_participated,
                    character_id: form.character_id
                }
            }).then((res) => console.log(res)).catch((err) => console.log(err))

            localStorage.setItem("page", 4)
            window.location.href = "/"
        }
    }

    let rdct = (e) => {
        e.preventDefault();
        localStorage.setItem("page", "4")
        window.location.href = "/"
    }

    let rdctback = (e) => {
        e.preventDefault();
        localStorage.setItem("page", "2")
        window.location.href = "/"
    }

    return (
        <>
            <div className="container">
            <div className="subContainer1">
                <div className="block">
                    <img className="crownpng" src={vector} />
                    <h1>Redberry Knight Cup</h1>
                </div>
            </div>
            <div className="subContainer4">
                <div className="photodescript">
                    <b className="phototext">
                        “Many have become chess masters; no one has become the master of chess.”
                    </b>
                </div>
                <div className="author1">
                    - Siegbert Tarrasch
                </div>
            </div>
            <div className="subContainerright">
                <div className="block1">
                    <div className="block-info">
                        <h1>First step is done, continue to finish onboarding</h1>
                    </div>
                </div>
                <div className="Frame12">
                    <div className="Personalinfotext">
                        <p>Personal information</p>
                        </div>
                    <div className="Frame9">

                        <div className="check-all">
                        
                        </div>
                    </div>
                    <div className="line">
                            
                        </div>
                         <div className="ChessExptext">

                            <p>Chess Experience</p>
                            </div>
                        <div className="Frame10">
                        <p>2</p>

                        </div>
                </div>
                <div className="block3">
                    <h3>
                        Chess Experience
                    </h3>

                </div>

                <div className="block3lowercase">
                    <h3 >
                        This is basic informaton fields
                    </h3>
                </div>
              
                <form onSubmit={handleSubmit} className="dropdown-location">
                    <div className="alo">
                        <select onChange={handleChange} className={sel1} name="experience_level">
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Professional">Professional</option>
                        </select> 
                        <select onChange={handleChange} className={sel2} name="character_id">
                            <option value="1">Magnus Carlsen</option>
                            <option value="2">Bobby Fischer</option>
                            <option value="3">Wilhelm Steinitz</option>
                            <option value="4">Baadur Jobava</option>
                        </select>
                    </div>

                    <p>Have you participated in the Redberry Championship? *</p>
                    <div className={sel3}>
                        <input onChange={handleChange} type="radio" id="contactChoice1" name="already_participated" value="true" />
                        <label  for="contactChoice1">Yes</label>

                        <input onChange={handleChange} type="radio" id="contactChoice2" name="already_participated" value="false" />
                        <label for="contactChoice2">No</label>
                    </div>

                </form>
        
                <div className="participation">

                    <div className="participation-textarea">
                        <div className="participation-text">
                            {/* <form>
                                <p>Have you participated in the Redberry Championship? *</p>
                                <div className="input">
                                    <input type="radio" id="contactChoice1" name="contact" value="email" />
                                    <label for="contactChoice1">Yes</label>

                                    <input type="radio" id="contactChoice2" name="contact" value="phone" />
                                    <label for="contactChoice2">No</label>

                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
                <button onClick={rdctback} className="buttonback3" >
                   
                        <h3>Back</h3>
                    
                </button>
                <button onClick={handleSubmit} className="buttonnext1" >
                    <p className="textnext">Next  </p>
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