import React from 'react';
import ytsr from 'ytsr';
import ReactDOM from 'react-dom';
import Form from "./Forms"
import ReactPlayer from 'react-player'

class Youtuber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
                name: ""
            },
            Video: null,
            Input: null
        }
    } 

    handleChange = e => {
        this.setState({Input: e.target.value})
    }

    handleSubmit = e => {
        // // e.preventDefault()
        // // // console.log(ytsr(`Bosotn music`).replace(/&/g,"and%26"))
        // // // console.log(this.search(this.state.Input))
        // // this.setState({Video: e.target.value}) 

        // e.preventDefault()
        // this.setState(prevState => ({

        // }))

        e.preventDefault()

        console.log(this.state.Input)

        this.setState(prevState => ({
            Video: prevState.Input,
            post: { name: "" }
        }))
    }

    async search(term){
        let searchResults = await ytsr(`${term} music`);
        console.log(searchResults.items[0]) 
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
                <p>{this.state.Video}VIDEO TEST</p>
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