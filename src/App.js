import React, { Component } from 'react';
import Video from './Video/Video';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Cloudinary Video Player Implemented as a React Component</h1>

        <Video
          id="Godot-Game-Development-Mini-Degree-Trailer_688759150c"
          cloudName="wikacy-com"
          controls
          muted
          width={960}
          config={{
            autoShowRecommendations: true
          }}
          source={{
            publicId: "k9txg0fx9g1fjdzgq3vd",
            info: {
              title: "Meme",
              subtitle: "Collection of memes"
            },
            recommendations: [
              {
                publicId: "wikacy-app-wizard-promo-2_678256d974",
                info: {
                  title: "Wizard Action",
                  subtitle: "Power of Wik",
                  description: "The wizard of wikacy comes back."
                }
              }, {
                publicId: "finish_line",
                info: {
                  title: "Cras dapibus"
                }
              }, {
                publicId: "snow_horses",
                info: {
                  title: "Donec quam felis"
                }
              }, {
                publicId: "dirt_bike",
                info: {
                  title: "Lorem ipsum"
                }
              }
            ]
          }}
        />
        <p>See <a href="https://github.com/t-a-y/cld-react-video">https://github.com/t-a-y/cld-react-video</a></p>
      </div>
    );
  }
}

export default App;
