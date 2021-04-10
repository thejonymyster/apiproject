import { render } from '@testing-library/react';
import React, { useState, useEffect, useContext, Component } from 'react';

// function APIThing(props) {
    
    //Create a new object to interact with the server
    var xhr = new XMLHttpRequest();

    // var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

    // Provide 3 arguments (GET/POST, The URL, Async True/False)
    xhr.open('GET', props.MyUrl, true);

    // Once request has loaded...
    xhr.onload = function() {
        // Parse the request into JSON
        var data = JSON.parse(this.response);

        // Log the data object
        console.log(data);

        // Log the page objects
        console.log(data.query.pages)

        // Loop through the data object
        // Pulling out the titles of each page
        for (var i in data.query.pages) {
            console.log(data.query.pages[i].title);
        }
    }
    // Send request to the server asynchronously
    xhr.send();

    // render();{
    //     return(
    //         <>
    //             <p>{this.data.query.pages[0].title} and the {this.data.query.pages[1].title}s</p>
    //         </>
    //     )
    // }
    
//     return null;
// }

export default xhr;
// export default APIThing;