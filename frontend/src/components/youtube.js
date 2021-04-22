import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./Forms"
import ReactPlayer from 'react-player'
import youtubeapi from './youtubeapi'
import APIThing from './wikitest'

function fix(n){
    if (n){return "300px"}
    return "0px"
}

class Youtuber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Videos: [],
            Input: null
        }
    } 

    handleChange = e => {
        this.setState({Input: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state)
        const response = await youtubeapi.get('/search', {
            params: {
                q: e
            }
        })
        this.setState({
            Videos: response.data.items
        })
    }

    render() {
        return (
            <>
                <div>
                    {/* <ReactPlayer url={"https://www.youtube.com/watch?v=Ds14zhfHEvE"} /> */}
                </div>

                <Form 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    Input={this.state.Input}              
                />

                <p>{this.state.Videos}VIDEO TEST</p>
                <p> Did you mean:
                <APIThing term={`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=10&gsrsearch='${this.state.Input}  (band)'`}/>?
                </p>
                <p>Ready to go on: {global.bandname}</p>
                <p><a target="iframe_a" href={`https://en.wikipedia.org/wiki/${global.bandname}`}>Start reading</a></p>
                <iframe src="demo_iframe.htm" name="iframe_a" height={fix(global.bandname)} width="90%" title="Iframe Example"></iframe>
            </>
        )
    }
}

// const main = async () => {
//     const searchResults = await ytsr(`boston music`);

//     console.log(searchResults.items[0].id)
// }

// main()

// const YoutubeEmbed = ({ embedId }) => (
//   <div className="video-responsive">
//     <iframe
//       width="0"
//       height="0"
//       src={`https://www.youtube.com/embed/${embedId}`}
//       frameBorder="0"
//       allow="autoplay"
//       title="Embedded youtube"
//     />
//   </div>
// );

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

// export default YoutubeEmbed;
ReactDOM.render(
    <Youtuber />,
    document.getElementById('root')
)
export default Youtuber;