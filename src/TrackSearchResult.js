import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
        chooseTrack(track)
        console.log(track)
    }
    return (
        <div className='d-flex m-2 align-items-center'>
            <img src={track.album} style={{ height: '100px', width: '100px' }} />
            <div className='ml-3' style={{ padding: '15px', cursor: 'pointer' }} onClick={handlePlay}>
                <div>
                    {track.title}
                </div>
                <div className='text-muted'>
                    {track.artist}
                </div>
                <div>{track.year}</div>
            </div>
        </div>
    )
}
