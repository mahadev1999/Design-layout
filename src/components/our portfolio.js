import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import image1  from './image1.jpg';
import image2  from './image2.jpg';
import image3  from './image3.jpg';
import image4 from './image4.jpeg';
import image5  from './image5.jpg';
import image6  from './image6.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faMinus } from "@fortawesome/free-solid-svg-icons";


export default function Pro(){
    return(
        
        <div className="container">
            <div className="text-primary">
                <h1 className="text-center">Our Protfolio</h1>
            </div>
            
            <div className="row text-center mt-3">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis. Cras convallis ipsum lorem, nec pellentesque nisi tempus ultricies.</p>
            </div>
            <div className="row">
                <FontAwesomeIcon icon={faCaretDown} className="col-lg-2 text-primary" fontSize="25px"/>
            </div>
            <div className="row text-primary">
                <div className="col-lg-1">&nbsp;</div>
                <h5 className="col-lg-2">ALL</h5>
                <h5 className="col-lg-3">WEB DEVELOPMENT</h5>
                <h5 className="col-lg-3">GAME DEVELOPMENT</h5>
                <h5 className="col-lg-3">APP DEVELOPMENT</h5>
            </div>
                            
            <div className="row">
                <div className="col-lg-4">
                <img src={image1} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={image2} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={image3} height="300px" width="380px" />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                <img src={image4} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={image5} height="300px" width="380px" />
                </div>
                <div className="col-lg-4">
                <img src={image6} height="300px" width="380px" />
                </div>
            </div>
        </div>
    )
}