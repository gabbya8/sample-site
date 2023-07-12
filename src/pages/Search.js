import useAuth from '../useAuth';
import TrackSearchResult from '../TrackSearchResult';
import { Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';


const spotifyApi = new SpotifyWebApi({
    clientId: '4b558a0f256441e8a8f8e7f9392e5726'
});

function Search({ code }) {
    const accessToken = useAuth(code)
    // console.log(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    console.log(searchResults)

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        spotifyApi.searchTracks(search).then(res => {
            console.log(search)
            console.log(res.body.tracks.items)
            setSearchResults(res.body.tracks.items.map(track => {
                return {
                    // todo: display multiple artists, if any
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    album: track.album.images[0].url,
                    albumName: track.album.name,
                    year: track.album.release_date.substring(0, 4)
                }
            }))
        })
    }, [search, accessToken])
    return (
        <Container className='d-flex flex-column py-2'>
            <Form.Control type="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
            <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}></div>
            {/* only display songs when user starts typing */}
            <h4>Songs</h4>
            {searchResults.map(track => (
                <TrackSearchResult track={track} key={track.uri} />
            ))}
        </Container>

    );
}

export default Search;