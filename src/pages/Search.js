import useAuth from '../useAuth';
import TrackSearchResult from '../TrackSearchResult';
import Player from '../Player';
import { Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';


const spotifyApi = new SpotifyWebApi({
    clientId: '4b558a0f256441e8a8f8e7f9392e5726'
});

function Search({ code }) {
    const accessToken = useAuth(code)
    // states
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    // console.log(searchResults)

    function chooseTrack(track) {
        setPlayingTrack(track)
        // setSearch("")
        //move to Player page

    }

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            console.log(search)
            console.log(res.body.tracks.items)
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                return {
                    // todo: display multiple artists, if any
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    album: track.album.images[0].url,
                    albumName: track.album.name,
                    year: track.album.release_date.substring(0, 4),
                    trackLength: track.duration_ms
                }
            }))
        })
        return () => cancel = true
    }, [search, accessToken])
    return (
        <Container className='d-flex flex-column py-2'>
            <Form.Control type="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
                {/* only display songs when user starts typing */}
                {searchResults.map(track => (
                    <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                ))}
            </div>
            {searchResults.length == 0? <h1>Nothing yet...</h1> : 
            <div>
                <Player accessToken={accessToken} trackUri={playingTrack?.uri} trackImg={playingTrack?.album} trackTitle={playingTrack?.title} trackArtist={playingTrack?.artist} trackDate={playingTrack?.year} />
            </div> }
        </Container>

    );
}

export default Search;