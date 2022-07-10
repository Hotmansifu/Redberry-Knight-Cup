import "../styles/regPerInfoPage.css"

import vector from "../images/Vector.png"
import first from "../images/first.png"

import React, { useEffect, useState } from "react"

export default function RegPerInfo() {

    let regex = new RegExp('[a-zA-Z0-9]+\.[a-zA-Z0-9]+@redberry\.ge')

    const init = {name: "", email: "", phone: "", date: ""}
    const [form, setForm] = useState(init)
    const [inp, setInp] = useState("inputname")
    const [eml, seteml] = useState("inputemail")
    const [date, setDate] = useState("inputdate")
    const [phn, setphn] = useState("inputnumber")
    let err = {}
    let val = {}

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (form.name.length <= 2) {
            err.name = "Name must contain more than 2 characters"
            val.name = false
            setInp("inputnamered")
        } else if (form.name.length > 20) {
            err.name = "Name must not contain more than 20 characters"
            val.name = false
        } else {
            setInp("inputname")
        }

        if (!regex.test(form.email)) {
            err.email = "Email must be given in Redberry Email format (example@redberry.ge)"
            val.email = false
            seteml("inputemailred")
        } else if (form.email.length <= 0) {
            err.email = "Email must contain more than 0 characters"
            val.email = false
            seteml("inputemailred")
        } else {
            seteml("inputemail")
        }

        if (form.phone.length < 9) {
            err.phone = "Phone must have 9 digits"
            val.phone = false
            setphn("inputnumberred")
        } else {
            setphn("inputnumber")
        }

        if (form.date.length <= 0) {
            err.date = "Phone must have 9 digits"
            val.date = false
            setDate("inputdatered")
        } else {
            setDate("inputdate")
        }

        console.log(Object.keys(val).length)
        valfn()

    }

    const valfn = () => {
        if (Object.keys(val).length == 0) {
            localStorage.setItem("name", form.name)
            localStorage.setItem("date", form.date)
            localStorage.setItem("email", form.email)
            localStorage.setItem("phone", form.phone)
            localStorage.setItem("page", 3)
            window.location.href = "/"
        } else {
            console.log(val, form)
        }
    }

    useEffect(() => {

    })

    let rdct = (e) => {
        e.preventDefault();
        localStorage.setItem("page", "3")
        window.location.href = "/"
    }

    let rdctback = (e) => {
        e.preventDefault();
        localStorage.setItem("page", "1")
        window.location.href = "/"
    }

    return (
        <>
            <div className="container">
                <div className="subContainer999">
                    <div className="block25">
                        <img className="crownpng420" src={vector} />
                        <h1>Redberry Knight Cup</h1>
                    </div>
                </div>
                <div className="subContainer9">
                    <div className="photodescript">

                        <b className="phototext">
                            “When you see a good move, look for a better one.”
                        </b>
                    </div>
                    <div className="author">
                        -Emanuel Lasker
                    </div>
                </div>

                <div className="subContainerright">

                    <div className="block2">
                        <div className="block-info">
                            <h1>Start creating your account</h1>
                        </div>
                    </div>
                    <div className="Frame12">
                        <div className="Personalinfotext">
                            <p>Personal information</p>
                            </div>
                        <div className="Frame9">

                            <div className="check-all1">
                            <div className="n1">
                                <p>1</p>
                            </div>
                            </div>
                        </div>
                        <div className="line">
                                
                            </div>
                            <div className="ChessExptext1">

                                <p>Chess Experience</p>
                                </div>
                            <div className="Frame10">
                            <p>2</p>

                            </div>
                    </div>
                    <div className="block3">
                        <h3>
                            Personal information
                        </h3>
                    </div>

                    <div className="block3lowercase">
                        <h3 >
                            This is basic informaton fields
                        </h3>

                    </div>
                    <form onSubmit={handleSubmit} action="" method="post" id="form1">
                        <div className="input-field">
                            <input
                                type="text"
                                required="required"
                                placeholder="Name*"
                                className={inp}
                                id="username1"
                                name="name"
                                onChange={handleChange}
                                />
                            
                            <input
                                type="email"
                                required="required"
                                name="email"
                                placeholder="Email address*"
                                className={eml}
                                id="email1"
                                onChange={handleChange}
                                />
                            <input
                                id="number1"
                                type="number"
                                name="phone"
                                required="required"
                                placeholder="Phone number*"
                                pattern="(^\d{9}$).placeholder="
                                className={phn}
                                onChange={handleChange}
                            />
                            <input
                                id="date1"
                                value={form.date}
                                className={date}
                                name="date"
                                placeholder="Date of Birth*" type="date" 
                                onChange={handleChange}
                            />
                        </div>

                        <button onClick={handleSubmit} id="nextButton1" className="buttonnext" >
                            <p className="textnext">Next</p>
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
                            
                    </form>
                </div>

                </div>
                <button onClick={rdctback} className="buttonback1" >
                    <h3>Back</h3>
                </button>
                {/* <button onClick={rdct} id="nextButton1" className="buttonnext" >
                <p className="textnext">Next</p>
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
                    </button> */}
            
        </>
    )
}