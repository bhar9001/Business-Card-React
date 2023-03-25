import React from "react"

export default function Information() {
    return (
        <header>
            <img src="./../profile.jpeg" className="profile-pic"/>
            <h2 className="name">Bharat Suthar</h2>
            <h4 className="skill">Full Stack Developer</h4>
            <a href="https://www.upwork.com/freelancers/~017c29199e61f8f119" className="website">Upwork</a>
            <div className="buttons">
                <a href="mailto:bharat9001706106@gmail.com" className="email"><i className="fa-solid fa-envelope"></i>Email</a>
                <a href="https://www.linkedin.com/in/bharat-suthar-509690114/" className="linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </header>
    )
}