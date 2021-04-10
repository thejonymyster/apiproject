import React from 'react';
import ytsr from 'ytsr';
import ReactDOM from 'react-dom';

class Youtuber extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Video: null,
            Input: null
        }
        this.handleChange = this.handleChange.bind(this)
    } 

    handleChange(event) {
        this.setState({Input: event.target.value}) 
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({Video: this.search(this.state.Input)}) 
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
                    width="0"
                    height="0"
                    src={`https://www.youtube.com/embed/${this.state.Video}`}
                    frameBorder="0"
                    allow="autoplay"
                    title="Video"
                    />
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={event => this.handleChange(event)}></input>
                </form>

                <div>
                    {/* steal frm wikipedia */}
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