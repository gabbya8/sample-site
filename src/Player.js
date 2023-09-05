import { useState, useEffect } from 'react';
import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css';


export default function Player({ accessToken, trackUri, trackImg, mode, hideImg }) {
    const [play, setPlay] = useState(false)
    // console.log(play)

    useEffect(() => setPlay(true), [trackUri]);

    return (
        <div className='player'>
            {hideImg?<img src= {trackImg} style={{width: '500px', height: '500px'}}></img> : null}
        <SpotifyPlayer
          token={accessToken}
        //   showSaveIcon
          callback={state => {
            if (!state.isPlaying) setPlay(false)
          }}
          play={play}
          uris={trackUri ? [trackUri] : []}
          layout={mode}
          hideAttribution
          hideCoverArt={hideImg}
        />
        </div>
      )
}
