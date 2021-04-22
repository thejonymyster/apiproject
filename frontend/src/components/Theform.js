import APIThing from './wikitest'
import Form from './Forms'
import React, { useState, useEffect, Component} from 'react';

class Theform extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Input: null
        }
    } 

    // const [data, setData] = useState()
    // const [example, setexample] = useState()
    // var myurl = ""
    // var wikisteal = ""

    // bind some shit here

    handleChange() {
        //fix this obviously
        this.setState({Input: })
    }

    // handleSubmit() = e => {

    // }

    render() {
        return <>
            <Form 
                handleChange={this.handleChange(event.target.value)}
                handleSubmit={this.handleSubmit}           
            />

            {/* <iframe url= myurl></iframe> */}

            <article>
                {/* <APIThing term={this.state.Input}/> */}
                <APIThing term={"https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=10&gsrsearch=%27Musical%20Artists%27"}/>
                {console.log(this.state,"this")}
            </article>
        </>
    }
}



export default Theform;