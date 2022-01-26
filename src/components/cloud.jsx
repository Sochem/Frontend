import React , { useEffect } from 'react';
import WOW from 'wowjs';
import './cloud.css';
import Navbar from './navbar';
import { useCookies } from 'react-cookie';
import coding from './images/cloud-coding.png';
import books from './images/cloud-books.png';
import online from './images/cloud-online.png';
import hulm from './images/cloud-hulm.png';
import core from './images/cloud-core.png'
import gate from './images/cloud-gate.png';
import gre from './images/cloud-gre.png';
import oe from './images/cloud-oe.png';
import Footer from './footer';


function Cloud(){

    const [ token, setToken ] = useCookies(['mr-token']);
    useEffect( () => {
        new WOW.WOW().init();
        if(!token['mr-token']) window.location.href = '/login';
    },[token])


    return(
        <div className="body-font">
            <Navbar/>
            <div className="jumbotron cont-home-sochem">
                <h1 className="jumbotron-heading-top">SoChem Cloud</h1>
            </div>
            <div className="container container-fluid text-center p-3">
                <div className="row align-items-end">
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center bg-none">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/15iEbYDjKoCVh-AmlbUN0-3YZiKoCG1gr"> */}
                        <a href="https://drive.google.com/drive/folders/1TOxyPEmb8l9VvNAa1IycT7rBHIp2x_Wd?usp=sharing">
                            <div id="cloud-card" className="card wow animate__flipInX">
                                <img class="card-img-top" src={books} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Books/Novels</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/1cCApJe4LYWJ43wyr0p3HMsjK5xPE-RTa"> */}
                        <a href="https://drive.google.com/drive/folders/15pTBbGVUdA0dTGFQI7QpfQWaXDQsr6cy?usp=sharing">
                            <div id="cloud-card" class="card wow animate__flipInX">
                                <img class="card-img-top" src={core} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Core Courses</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/19doEA6GO4HF8oqWTgPJbOx9xTCvJlJqE"> */}
                        <a href="https://drive.google.com/drive/folders/1R34YagE19rLI31yMRQo4G-UnvHRRBmgn?usp=sharing">
                            <div id="cloud-card" class="card wow animate__flipInX">
                                <img class="card-img-top" src={gate} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">Gate Preparation</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/1ojVB0uXyx5JaX8JlSg0JHZaD5cDkKO5S"> */}
                        <a href="https://drive.google.com/drive/folders/1mZSAyhN7BNX51g9V4if-6P1NWyFqtCmm?usp=sharing">
                            <div id="cloud-card" class="card wow animate__flipInX">
                                <img class="card-img-top" src={gre} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">GRE Preparation</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/1-20gmIL9mSEOeXkBj9cSGq7M0qGfLWkZ"> */}
                        <a href="https://drive.google.com/drive/folders/18u9EqfPqZ7t9z9RL49WL1ebeW51t_eF-?usp=sharing">
                            <div id="cloud-card" class="card wow animate__flipInX">
                                <img class="card-img-top" src={hulm} alt="Card image cap"/>
                                <div class="card-body">
                                    <p class="card-text text-center">HULM</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/1ojVB0uXyx5JaX8JlSg0JHZaD5cDkKO5S"> */}
                        <a href="https://drive.google.com/drive/folders/1ZGKENtgtA8UTCHcWIlSveJxg9_uX44vt?usp=sharing">
                        <div id="cloud-card" class="card wow animate__flipInX">
                            <img class="card-img-top" src={online} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">Online Courses</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/1l-Ww9Wx73wrIBdh-gztKfp-fX_sjanh5"> */}
                        <a href="https://drive.google.com/drive/folders/1-FPXGNsfx7jcpLksfqqyo_7KA0KeOBi9?usp=sharing">
                        <div id="cloud-card" class="card wow animate__flipInX">
                            <img class="card-img-top" src={oe} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">Open Electives</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
                        {/* <a href="https://drive.google.com/drive/u/5/folders/1kP586gtLGQI4b-EiyGewZbL6D9WBNOXh"> */}
                        <a href="https://drive.google.com/drive/folders/1VYASsgV_Ods_EyHiKd_Sm7qjE1gyNpnU?usp=sharing">
                        <div id="cloud-card" class="card wow animate__flipInX">
                            <img class="card-img-top" src={coding} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-text text-center">Programming</p>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Cloud;
