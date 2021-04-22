import React from 'react';
import Searchtest from './Searchtest.js';

function Home(props) {
    return (
        <>
            <div class="centertext">
                <h1>Welcome to WIKIJAM</h1>
                <h2>Listen while you read!</h2>
                <div class="centerhelp">
                    <article class="snugify">
                    Instructions: type in the name of the band you wish to listen to and read about, hit space, and then click start reading!
                    </article>
                <div class="spacer"></div>
                
                </div>
            </div>
        </>
    );
}

export default Home;