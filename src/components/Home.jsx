import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../App.css";

export const Home = () => {

    const { text } = useTypewriter({
        words: ["A Full Stack Web Developer",
            "An Experienced Leader",
            "A Proficient Instructor",
        ],
        loop: true,
        delay: 200,
        typeSpeed: 150,
        deleteSpeed: 85,
        delaySpeed: 3000,
    });

    return (
        <div id='home'>
            <section className='home d-flex flex-column justify-content-center align-items-center'>
                <div className='home-container' data-aos='fade-in'>
                    <h1>
                        Hello, <br /> I'm Chad
                    </h1>
                    <p>
                        <span className='typed'>
                            {text}
                        </span>
                        <Cursor />
                    </p>
                    <a href="mailto:chada.powell@outlook.com">
                        <button className='button'>Contact Me</button>
                    </a>
                </div>
            </section>
        </div>
    );
};