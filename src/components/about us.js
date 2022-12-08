import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faHandsHoldingCircle } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

export default function About(){
    return(
        <>
        <div className=" container">
            <div className="row text-white mt-3 text-center">
                <div className="col-lg-4 bg-primary">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="mt-2"fontSize="30px"></FontAwesomeIcon>
                    <h1>Our Story</h1>
                    <p>Game Development can be undertaken by a large Game Development Studio or by a single individual. 
                        It can be as small or large as you like.
                         As long as it lets the player interact with content and is able to manipulate the game’s elements,
                          you can call it a ‘game’.</p>
                </div>

                <div className="col-lg-4 bg-dark">
                    <FontAwesomeIcon icon={faHandsHoldingCircle} className="mt-2" fontSize="30px"></FontAwesomeIcon>
                    <h1>Our Mission</h1>
                    <p>Game Development can be undertaken by a large Game Development Studio or by a single individual. 
                        It can be as small or large as you like.
                         As long as it lets the player interact with content and is able to manipulate the game’s elements,
                          you can call it a ‘game’.</p>
                </div>

                <div className="col-lg-4 bg-primary">
                <FontAwesomeIcon icon={faEye} className="mt-2" fontSize="30px"></FontAwesomeIcon>
                    <h1>Our Vision</h1>
                    <p>Game Development can be undertaken by a large Game Development Studio or by a single individual. 
                        It can be as small or large as you like.
                         As long as it lets the player interact with content and is able to manipulate the game’s elements,
                          you can call it a ‘game’.</p>
                </div>
            </div> 
        </div>
        </>
    );
}