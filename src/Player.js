import { useState, useEffect } from 'react';
import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css';
import { FaRegPlayCircle, FaRegPauseCircle, FaForward, FaBackward } from "react-icons/fa";

export default function Player({ accessToken, trackUri, trackImg, trackTitle, trackArtist, trackDate, trackLength }) {
    const [isPlaying, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return <div>
            <div className='player'>
                <img src= {trackImg} style={{width: '500px', height: '500px'}}></img>
                <div style={{fontSize: '20px'}}>{trackTitle}</div>
                <div className='text-muted'>{trackArtist}</div>
                <div>{trackDate}</div>
            </div>
            <div className='player-buttons'>
                <FaBackward className='back-button'/>
                <button className='play-button'>
                    {isPlaying? <FaRegPauseCircle /> : <FaRegPlayCircle/>}
                </button>
                <FaForward className='forward-button'/>
            </div>
            <div>
                <input type='range'></input>
            </div>
        </div>
    // return <SpotifyPlayer
    //     token={accessToken}
    //     showSaveIcon
    //     callback={state => {
    //         if (!state.isPlaying) setPlay(false)
    //     }}
    //     play={play}
    //     uris={trackUri ? [trackUri] : []}
    //     // offset={1}
    //     magnifySliderOnHover
    //     hideAttribution
    //     layout
        
    // />
}
