import React, { Component } from "react"

class Musictest extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src="https://upload.wikimedia.org/wikipedia/en/8/80/The_Amen_Break%2C_in_context.ogg"></source>
        </audio>
      </div>
    )
  }
}

export default Musictest;