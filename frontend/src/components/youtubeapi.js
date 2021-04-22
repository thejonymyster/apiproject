import { render } from '@testing-library/react'
import axios from 'axios'
import React, { Component } from 'react'

const KEY = 'AIzaSyBicew2Q6UoLKlLzIIimdXKOFCz8gZQQvE'

export default class Videoworker extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://www.googleapis.com/youtube/v3/`, {params: {part: 'snippet',maxResults: 5,key: KEY}
    })
        .then(res => {
          console.log("mario", res, "mario")
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
        test
          { this.state.persons.map(person => <li>{person.name}</li>)}
        test
        </ul>
      )
    }
  }

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3/',
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         key: KEY
//     }
// })

// function Videoworker(term) {
//     return <>
//     <p>examplee {console.log(term, "hello")} {term.term}</p>
//     </>
// }

// class Videoworker extends Component {

//     state = {
//         videos: [],
//         displayVideo: null
//     }

//     async videoSearch (term) {
//         YTSearch({key: KEY, term: term}, (videos) => {
//         this.setState({
//             videos: videos,
//             displayVideo: videos[0]
//         })
//         })
//     }

//     async vidfind(input) {
//         await this.videoSearch("hi")
//     }

//     render() {

//         return <>
//                     <p>example</p>
//                     <div>{console.log(this.state, "hi", this.videoSearch("test"))}</div>
//                     <p>{this.state.displayVideo}</p>
//                </>
//     }
// }

// export default Videoworker;