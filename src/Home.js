import React from 'react';
import Contact from './Contact';
import suaad from './images/suaad.jpg'

import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <div style = {{paddingLeft: '20px', paddingTop: '170px', height: '500px'}}>
            <h1>Hi, my name is Amin Suaad</h1>
            <h1>I'm a <span style={{color: '#02aab0'}}>Software Engineer.</span></h1>
            <a href="#aboutMe" class="btn btn-info">About Me</a>
            <br></br>
            <a style = {{marginTop: '5px'}} href="https://github.com/AMIN-SUAAD" class="btn btn-info">Github Profile</a>
            <br></br>
            <a style = {{marginTop: '5px'}} href="https://www.linkedin.com/in/amin-suaad-a0323a1a9/" class="btn btn-info">LinkedIn Profile</a>
            </div>

            <div style = {{height: '400px', backgroundColor: '#02aab0'}}>
                <h2 id = "aboutMe" style = {{color: 'white', textAlign: 'center', paddingTop: '10px'}}>About Me</h2>

            <div className="row d-flex align-items-center" style = {{paddingTop: '40px'}} >
                <div className = "col-md-6" style = {{paddingLeft: '200px'}}>
                    <img src = {suaad} style = {{borderRadius:'50%', height: '200px', width: '200px'}}></img>

                </div>
                <div className = "col-md-6" style = {{paddingRight: '100px'}}>
                    <p  style = {{color: 'white'}}>I count myself as a hardworking person. To pursue a challenging career in a competitive world where enthusiasm, honesty, hard work and passion will support me to grow myself as well as utilize my knowledge and expertise for professional development in the relevant field.</p>
                    <a href = "https://drive.google.com/file/d/1QPDvkLgxAE80i8a43oULc922McaWrn_e/view" class="btn btn-dark">Resume</a>

                </div>

            </div>
            </div>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;