import React from 'react';
import Searchtest from './Searchtest.js';

function Home(props) {
    return (
        <>
            <div class="centertext">
                <h1>Title</h1>
                <h2>Subtitle</h2>
                <div class="centerhelp">
                    <article class="snugify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, totam eaque cupiditate porro, cumque a placeat reprehenderit aut aliquid praesentium dolor amet perferendis accusamus asperiores iure officia alias quae deserunt, ipsum labore tenetur? Sapiente, sed inventore ducimus facilis obcaecati animi porro fugiat delectus saepe ad illo eos, quisquam laudantium harum.
                    </article>
                <div class="spacer"></div>
                <Searchtest />
                </div>
            </div>
        </>
    );
}

export default Home;