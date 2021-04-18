import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./Forms"
import ReactPlayer from 'react-player'
import youtubeapi from './youtubeapi'

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
                    <ReactPlayer url={"https://www.youtube.com/watch?v=Ds14zhfHEvE"} />
                </div>

                <Form 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    Input={this.state.Input}              
                />

                <p>{this.state.Input}INPUT BAYBEE</p>
                <p>{this.state.Videos}VIDEO TEST</p>
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