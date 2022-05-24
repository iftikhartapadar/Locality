import React from 'react';
 import "../App.css";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import angel from "../Assets/Angel.jpeg";
 import clarissa from "../Assets/Clarissa.jpeg";
 import harisen from "../Assets/Harisen.jpeg";
 import iftikhar from "../Assets/Iftikhar.jpeg";
 import liana from "../Assets/Liana.jpeg";
 import logo from "../Assets/Locality_Logo.png";
 

 
 function Footer() {
     return (
         <div className="container-fluid mx-auto footer-container">
         <div className="footer-row justify-content-center">
             <div className="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
                <div className="footer-locality">
                    <a href="/Homepage"><img src={logo} className="footer-logo" alt="Locality Logo"></img></a>
                    <hr className="footer-line"></hr>
                    <h5 className="footer-title">Locality</h5>
                    <p className="mb-0">Meet the creators!</p>
                 </div>
                 <div>
                    <a href="https://www.linkedin.com/in/angelcruzsalvador">
                      <img src={angel} className="footer-img" alt="Angel"></img>
                     </a>
                    <hr className="footer-line"></hr>
                    <h5 className="footer-title">Angel Cruz Salvador</h5>
                    <p className="mb-0">Tufts University 2024</p>
                    <p className="mb-0">Computer Science</p>
                 </div>
                 <div>
                 <a href="https://www.linkedin.com/in/clarissa-alfonso/">
                    <img src={clarissa} class="footer-img" alt="Clarissa"></img>
                    </a>
                    <hr className="footer-line"></hr>
                    <h5 className="footer-title">Clarissa Alfonso</h5>
                    <p className="mb-0">John Hopkins University 2024</p>
                    <p className="mb-0">Computer Science + Neuroscience</p>
                 </div>
                 <div>
                 <a href="https://www.linkedin.com/in/harisen-luby/">
                    <img src={harisen} className="footer-img" alt="Harisen"></img>
                    </a>
                    <hr className="footer-line"></hr>
                    <h5 className="footer-title">Harisen Luby</h5>
                    <p className="mb-0">Brown University 2023</p>
                    <p className="mb-0">Computer Science</p>
                 </div>
                 <div>
                 <a href="https://www.linkedin.com/in/iftikhar-tapadar/">
                    <img src={iftikhar} className="footer-img" alt="Iftikhar"></img>
                  </a>
                    <hr className="footer-line"></hr>
                    <h5 className="footer-title">Iftikhar Tapadar</h5>
                    <p className="mb-0">Stony Brook University 2023</p>
                    <p className="mb-0">Computer Science</p>
                 </div>
                 <div>
                 <a href="https://www.linkedin.com/in/lianalouiseadaza/">
                   <img src={liana} className="footer-img" alt="Liana"></img>
                  </a>
                    <hr className="footer-line"></hr>
                    <h5 className="footer-title">Liana Louise Adaza</h5>
                    <p className="mb-0">Florida International University 2024</p>
                    <p className="mb-0">Computer Engineering</p>
                 </div>
             </div>
         </div>
         </div>
    )
 }

export default Footer;