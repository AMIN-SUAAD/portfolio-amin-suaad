import React from 'react';
import project1 from './images/project1.PNG'
import project2 from './images/project2.PNG'
import project3 from './images/project3.PNG'

const Projects = () => {
    return (
        <div>
            <h1 style = {{color: '#02aab0', textAlign: 'center', paddingTop: '20px'}}>Projects</h1>
        <div className = "row mt-5 mb-5">
          <div class="card col-md-3" style={{width: '18rem', marginLeft: '168px'}}>
  <img src={project1} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Creative Agency</h5>
    <p class = 'card-text'><span style = {{fontWeight: 'bold'}}>Technology:</span> React JS, Node JS, MongoDB, Firebase, Bootstrap</p>
    <p class="card-text"><span style = {{fontWeight: 'bold'}}>Overview:</span> It’s a service provider organization’s website with different levels of accessibility. A general user can order, give review and see previous orders and an admin can see all orders, make someone admin and add any service.</p>
    <a href="https://creativeagency-a37e2.web.app/" class="btn btn-info">Live Site</a>
    <a style = {{marginTop: '5px'}} href="https://github.com/AMIN-SUAAD/creative-agency-client" class="btn btn-info">Client Side Repository</a>
    <a style = {{marginTop: '5px'}} href="https://github.com/AMIN-SUAAD/creative-agency-server" class="btn btn-info">Server Side Repository</a>
  </div>
</div>

<div class="card col-md-3" style={{width: '18rem'}}>
  <img src={project2} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Travel Guru</h5>
    <p class = 'card-text'><span style = {{fontWeight: 'bold'}}>Technology:</span>  React JS, React-Router, Firebase, Material UI</p>
    <p class="card-text"><span style = {{fontWeight: 'bold'}}>Overview:</span> A hotel booking site. Only the client side has been built.</p>
    <a href="https://travel-guru-9c002.web.app/" class="btn btn-info">Live Site</a>
    <a style = {{marginTop: '5px'}} href="https://github.com/AMIN-SUAAD/travel-guru" class="btn btn-info">Client Side Repository</a>
  </div>
</div>

<div class="card col-md-3" style={{width: '18rem'}}>
  <img src={project3} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">German Grade Calculator</h5>
    <p class = 'card-text'><span style = {{fontWeight: 'bold'}}>Technology:</span>  React JS, React-Router, Bootstrap</p>
    <p class="card-text"><span style = {{fontWeight: 'bold'}}>Overview:</span> A website for converting grades from Bangladeshi grading system to German grading system.</p>
    <a href="https://fervent-easley-d894bc.netlify.app/" class="btn btn-info">Live Site</a>
    <a style = {{marginTop: '5px'}} href="https://github.com/AMIN-SUAAD/german-grade-calculator" class="btn btn-info">Client Side Repository</a>
  </div>
</div>
        </div>
        </div>
    );
};

export default Projects;