import React, { Component } from 'react';

import Song from './Song'

const s = [
    {id: 1, artist: 'Britney Spears', song: 'Oops, I did it again', genre: 'pop'},
    {id: 2, artist: 'Nsync', song: 'Bye Bye Bye', genre: 'pop'}

]

class App extends Component{

    constructor(props){
        super(props)

        this.state = {
            songs: s
        }

    }

    songSubmit = (formData) => {
        const newSong = {
            id: this.state.songs.length + 1,
            song: formData.song,
            artist: formData.artist,
            genre: formData.genre
        }

        this.setState(
            { songs: [...this.state.songs, newSong ] }
        )

    }

    render(){

        return (

            <div>
                <Song songs={this.state.songs} songSubmit={this.songSubmit}/>
            </div>
        )
    }
}

export default App;



