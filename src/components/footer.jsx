import React , { useState, useEffect } from 'react';
import './footer.css';
var FontAwesome = require('react-fontawesome');



function Footer(){
    return (
        <footer class="site-footer mt-4">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 col-md-12 text-center">
                <h4 class="">
                    Designed, hosted and managed by SoChem Informatics Team.
                </h4>
              </div>
            </div>
            <hr/>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <h5 class="copyright-text">
                    The Society of Chemical Engineers
                </h5>
              </div>
    
              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                  
                  <li><a class="linkedin" href="https://www.linkedin.com/company/society-of-chemical-engineers-iit-bhu/"><i class="fab fa-linkedin"></i></a></li>   
                  <li><a class="instagram" href="https://www.instagram.com/sochem_iitbhu/?hl=en"><i class="fab fa-instagram"></i></a></li>   
                  <li><a class="facebook" href="https://www.facebook.com/Sochem.iitbhu"><i class="fab fa-facebook"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
}

export default Footer;