import React from "react"
import About from "./About"
import Footer from "./Footer"
import Information from "./Information"
import Interests from "./Interests"

export default function App() {
    return (
        <div className="card">
            <Information/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}