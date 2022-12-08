import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCalendarDays, faCheckCircle, faHeartCircleCheck, faPersonCirclePlus,} from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return(
        <div className="container mt-4 text-light bg-primary">
            <div className="row text-center">
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faCalendarDays} className="mt-2" fontSize="22px"/>
                    <h1>12 +</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="mt-2 mr-5"  fontSize="22px"/>
                    <h1>999 +</h1>
                    <p>COMPLETED PROJECTS</p>
                </div>
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faPersonCirclePlus} className="mt-2 mr-5" fontSize="22px"/>
                    <h1>480 +</h1>
                    <p>TOTAL CLIENTS</p>
                </div>
                <div className="col-lg-3">
                    <FontAwesomeIcon icon={faHeartCircleCheck}  className="mt-2" fontSize="22px"/>
                    <h1>15 +</h1>
                    <p>AWARD WON</p>
                </div>
            </div>
        </div>
    )
}

