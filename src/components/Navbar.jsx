import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand me-5" href="#">Single page Application</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item me-5">
                                <Link to={"/"} style={{ textDecoration: "none" }}>Home</Link>
                            </li>
                            <li class="nav-item me-5">
                                <Link to={"/about"} style={{ textDecoration: "none" }}>About</Link>
                            </li>
                            <li class="nav-item me-5">
                                <Link to={"/contact"} style={{ textDecoration: "none" }}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
