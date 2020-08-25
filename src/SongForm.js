import React, { Component } from 'react';

class SongForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            song: '', 
            artist: '',
            genre: ''
        }
    }

    // handleSongChange = (e) => {

    //     this.setState({
    //         song: e.target.value
    //     })

        

    // }

    // handleArtistChange = (e) => {

    //     this.setState({
    //         artist: e.target.value
    //     })

        

    // }

    // handleGenreChange = (e) => {

    //     this.setState({
    //        genre: e.target.value
    //     })

        

    // }

    handleChange = (e) => {
       const { name, value } = e.target

       this.setState({
           [name]: value
       })
    }

    resetForm = () => {
        this.setState({
            artist: '',
            song: '', 
            genre: ''
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.songSubmit(this.state)
        this.resetForm()


    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Song:</label>
                    <input 
                        type='text'
                        value={this.state.song}
                        onChange={this.handleChange}
                        name="song"
                    />

                    <br/>
                    <br/>

                    <label>Artist:</label>
                    <input 
                        type='text'
                        value={this.state.artist}
                        onChange={this.handleChange}
                        name="artist"
                    />

                    <br/>
                    <br/>

                    <label>Genre:</label>
                    <input 
                        type='text'
                        value={this.state.genre}
                        onChange={this.handleChange}
                        name="genre"
                    />

                    <br />
                    <br/>

                    <input type="submit" value="Create Song" />
                </form>
                
            </div>
        );
    }
}

export default SongForm;