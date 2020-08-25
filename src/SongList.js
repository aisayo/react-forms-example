import React, { Component } from 'react';

import SongCard from './SongCard'

class SongList extends Component {
    render() {

        const { songs } = this.props 
 
        return (
            <div>
                { songs.map(song => <SongCard key={song.id} song={song}/>)}
            </div>
        );
    }
}

export default SongList;