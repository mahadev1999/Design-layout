import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faMobileAndroidAlt, faPhone, faTv, faW } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Service(){
    return(
        
        <div className="container">
             <div className="">
                <h1 className="text-center text-primary">Our Services</h1>
                <p className="text-center mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet iaculis mi, quis volutpat urna. Quisque egestas est vel tempus mattis.</p>
             </div>
            <div className="row mt-5 col-lg-12">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="25px" />
                    <p className="">WEB DESIGN</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="25px" />
                    <p className="">WEB DEVELOPMENT</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faGear} fontSize="25px" />
                    <p className="">THEME DEVELOPMENT</p>
                </div>
            </div>

            <div className="row mt-3 col-lg-12">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faGears} fontSize="25px" />
                    <p className="">GAME DEVELOPMENT</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faMobileAndroidAlt} fontSize="25px" />
                    <p className="">APPS DEVELOPMENT</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faGear} fontSize="25px" />
                    <p className="mr-5">DESKTOP APPLICATION</p>
                </div>
            </div>

            <div className="row mt-3 col-lg-12">
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faW} fontSize="25px" />
                    <p className="">WORDPRESS THEMES</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faTv} fontSize="25px" />
                    <p className="">WORDPRESS PLUGINS</p>
                </div>
                <div className="col-lg-1">&nbsp;</div>
                <div className="col-lg-3 bg-secondary d-flex">
                    <FontAwesomeIcon icon={faPhone} fontSize="25px" />
                    <p className="mr-5">SUPPORT & IT</p>
                </div>
            </div>


        </div>
        
    )   
}
        
 