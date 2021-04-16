import React from 'react';
import ytsr from 'ytsr';
import ReactDOM from 'react-dom';
import APIThing from './wikitest';

class Youtuber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Video: null,
            Input: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    handleChange(event) {
        this.setState({Input: event.target.value}) 
    }

    async handleSubmit(event) {
        event.preventDefault()
        // console.log(ytsr(`Bosotn music`).replace(/&/g,"and%26"))
        // console.log(this.search(this.state.Input))
        this.setState({Video: await this.search(this.state.Input)}) 
    }

    async search(term){
        let searchResults = await ytsr(`${term} music`);
        return searchResults.items[0].id
    }

    render(){
        return(
            <>
                <div className="video-responsive">
                    <iframe
                    width="500"
                    height="500"
                    // src={`https://www.youtube.com/embed/${this.state.Video}`}
                    src={`https://www.youtube.com/embed/${this.state.Input}`}
                    frameBorder="0"
                    allow="autoplay"
                    controls="0"
                    title="Video"
                    autoplay="1"
                    />
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={event => this.handleChange(event)}></input>
                    <button>Surmit!</button>
                </form>

                <p>{this.state.Input}</p>

                <div>
                    {/* steal frm wikipedia */}
                    <APIThing term={`https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='${this.state.Input}_(Band)'`} />
                </div>
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