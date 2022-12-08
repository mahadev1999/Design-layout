import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

export default function Home(){
    return(
        <>
        <div className="container">
        
            
            <div className="col-lg-12 text-primary">
                <h1 className="text-center">Welcome To Our Website</h1>
            </div>

            <div className="col-lg-12">
                <p>To get involved in the Game Development process, you do 
                    not need to write code. Artists may create and design assets,
                     while a Developer might focus on programming a health bar.
                      A Tester may get involved to see that the game works as expected ,A game developer could be a programmer, 
                      a sound designer, an artist, a designer or many other roles available in the industry.</p>        
            </div>
            <div className="col-lg-2 button">
                <button type="button" name="readmore" className="btn btn-dark">Read more</button>
                </div> 
        </div>
        </>
    );
}