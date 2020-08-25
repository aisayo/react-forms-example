import React from 'react';

const SongCard = (props) => {
    return (
        <div>
            {props.song.artist} - {props.song.song} - {props.song.genre}
        </div>
    );
};

export default SongCard;