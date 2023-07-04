import'./css/Main.css';
import useAuth from '../useAuth';
import {Container, Form} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';


const spotifyApi = new SpotifyWebApi({
    clientId: '4b558a0f256441e8a8f8e7f9392e5726'
});

function Main({code}) {
    const accessToken = useAuth(code)
    // console.log(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    // window.history.pushState({}, null, "/main")

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if(!search) return setSearchResults([])
        if(!accessToken) return

        spotifyApi.searchTracks(search).then(res => {
            console.log(search)
            console.log(res.body.tracks.items)
        })
    }, [search, accessToken])
    return(
        // <div className='Main'>
        //     <SearchBar></SearchBar>
        // </div>
        <Container className='d-flex flex-column py-2'>
            <Form.Control type="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)}/>
            <div className="flex-grow-1 my-2" style={{overflowY: "auto"}}></div>
        </Container>
    );
}

export default Main;