 import React from 'react';
 import "../add.css";
 import my from "./my2.png";
 import html from "./html.png";
 import css from "./css.png";
 import js from "./js.png";
 import bootstrap from "./bootstrap.png";
 import netlify from "./netlify.png";
 import react from "./react.png";
 import github from "./github.png";
 import mail from "./mail.png";
 import call from "./call.png";
 import location from "./location.png";
 import school from "./school.jpg";
 import siren from "./siren.jpg";
 import cricket from "./cricketers.jpg";
 import clock from "./clock.jpg";
 import todo from "./todo.jpg";
 import feedback from "./feedback.jpg";
import resume from "./resume.jpg";

  function Headers() {
   return (
     <div>
        <div className="header">
          <h2 style={{display:"inline",marginLeft:"3vw",marginRight:"12vw",color:"#105652"}}>Ravikant Prasad</h2>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#resume'>Resume</a>
          <a href='#contact'>Contact</a>
         </div>
         <div id="home">
          <div className="iam">Hi, I am Ravikant Prasad
          <div className="developer"><b>A Front-end Developer </b></div> </div>
          <div className="ready">Get ready to turn ideas into reality    

            <div className="btn"><button className='hire'>Hire Me</button> <button className='resume'>Get Resume</button></div></div>
            <img className='image' src={my} alt="" />
  <svg className='wavee' width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 65.64358974358973,291.1846153846154 131.28717948717946,332.3692307692308 221,341 C 310.71282051282054,349.6307692307692 424.49487179487176,325.7076923076923 507,301 C 589.5051282051282,276.2923076923077 640.7333333333332,250.79999999999995 703,254 C 765.2666666666668,257.20000000000005 838.571794871795,289.0923076923077 936,289 C 1033.428205128205,288.9076923076923 1154.9794871794873,256.8307692307692 1243,245 C 1331.0205128205127,233.16923076923078 1385.5102564102563,241.5846153846154 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#35b3a0ff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

</div>
<br></br><br></br><br></br><br></br><br></br>
 <div id="about">
<div><img className='ima' src={my} alt="" /></div>
<div className='abt'><h1 className='abtme' style={{color:"#105652"}}>About Me </h1><br></br>  I am final year student(B.tech) at Central University of Haryana, Proficient in C++, HTML, CSS, JavaScript,jQuery and ReactJS.  I have developed some projects using these skills like To-Do App,Netflix-Mini,etc also skilled in CSS framework bootstrap and for backend I use Node.js. <br></br>My temporary aim to be work for a organization that gives me scope to enhance my knowledge & use my skill in accordance with the latest trends and be a part of team that dynamically works towards growth of organization.<br></br>
<div className="smallbox"><h5 style={{margin:"15px"}}>Languages/Library/Technology</h5> 
<div className="small">
<img src={html} alt="" />
<img src={css} alt="" />
<img src={js} alt="" />
<img src={netlify} alt="" />
<img src={bootstrap} alt="" />
<img src={react} alt="" />
<img src={github} alt="" />
</div>
</div>
</div>

 </div>
 
  <div id="portfolio"><h1 className='abtme' style={{color:"#105652"}}>My Portfolio</h1>
<div>
  <a href="https://meek-rolypoly-564946.netlify.app/" target="_blank" rel="noreferrer"><img className='webimage' src={school} alt="loading" /></a>
  <a href="https://glowing-cranachan-db09d3.netlify.app" target="_blank" rel="noreferrer"><img className='webimage' src={siren} alt="loading" /></a>
  <a href="https://vermillion-heliotrope-de992c.netlify.app/" target="_blank" rel="noreferrer"><img className='webimage' src={cricket} alt="loading" /></a>
  <a href="https://ravi27012001.github.io/project4/" target="_blank" rel="noreferrer"><img className='webimage' src={clock} alt="loading" /></a>
  <a href="https://ravi27012001.github.io/project5/" target="_blank" rel="noreferrer"><img className='webimage' src={todo} alt="loading" /></a>
  <a href="https://hilarious-marshmallow-66e69f.netlify.app/" target="_blank" rel="noreferrer"><img className='webimage' src={feedback}alt="loading" /></a>


</div>
  </div>

<div id="resume">
<h1 className='abtme' style={{color:"#105652"}}>Resume</h1>
<div className='res' ><img className='res' src={resume} alt="" /></div>
</div>

<div id="contact">
<h1 className='abtme' style={{color:"#105652"}}>Contact Me</h1>
<div className="cont" style={{backgroundColor:"white",padding:"50px"}}>
<div style={{width:"35%",textAlign:"left"}}><h2 style={{color:"#105652" }}>Let's connect</h2>
Please do let me know if my skills is suitable for your requirement.we can connect via mail or simply you can ring me on phone.<br></br><br></br>
<div className="con">
<div><img src={mail} alt="" />ravikantjrkp@gmail.com</div>
<div><img src={call} alt="" />+918292044041</div>
<div><img src={location} alt="" />Simariya,Chatra,Jharkhand (825103)</div>
</div>
</div>
<div className='sendme' ><h2 style={{color:"#105652"}}>Send me a message</h2>
<div className='inp'>Name*</div>
<input type="text" />
<div className='inp'>Phone Number*</div>
<input type="number" />
<div className='inp'>Email address*</div>
<input type="email" />
<div className='inp'>Message*</div>
<input style={{height:"50px"}} type="text" placeholder='your message here' /><br></br><br></br>
<input style={{width:"110px",height:"35px",color:"white",backgroundColor:"#FCA738",border:"none"}} type="submit" value="send Measage"/>
 </div>

</div>

</div>


<div className="footer">&#169;2022 Ravikant Prasad. All rights reserved</div>
 </div>

   )
 }
 
 export default Headers;