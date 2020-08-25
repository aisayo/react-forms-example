import React, { Component } from 'react';

import SongList from './SongList'
import SongForm from './SongForm'

class Song extends Component {

    // anything that deals with songs
    // mount our list
    // mount our form

    render() {

        // console.log(this.props)

        const { songs } = this.props 

        // const songs = this.props.songs

        // const artist = this.props.artist 

        return (
            <div>
                <SongList songs={songs} />
                <SongForm songSubmit={this.props.songSubmit}/>
            </div>
        );
    }
}

export default Song;