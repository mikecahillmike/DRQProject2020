import React from 'react';
import axios from 'axios';
import './create.css';

export class Create extends React.Component {

    constructor() {// Constructor
        super();

        this.state = {
            Name: '',
            Price: '',
            Poster: ''
        }
        // Methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
        this.handlePlayerPriceChange = this.handlePlayerPriceChange.bind(this);
        this.handlePlayerPosterChange = this.handlePlayerPosterChange.bind(this);
    }

    // Functions to handle saving the input values to the designated variables 
    handlePlayerNameChange(e) {
        this.setState({ Name: e.target.value });
    }

    handlePlayerPriceChange(e) {
        this.setState({ Price: e.target.value });
    }

    handlePlayerPosterChange(e) {
        this.setState({ Poster: e.target.value });
    }
    // Method for handling the submit request
    handleSubmit(e) {
        alert(this.state.Name + "      " + this.state.Price +
        "       " + this.state.Poster);
    e.preventDefault();

        // New Player
        const newPlayer = {
            name: this.state.Name,
            price: this.state.Price,
            poster: this.state.Poster
        };
        // New Player posted to the link
        axios.post('http://localhost:4000/api/players/', newPlayer)
            .then()
            .catch();

        // setting the state
        this.setState({
            Name: '',
            Price: '',
            Poster: ''
        });
    }
    render() {
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Add New Player</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='playerName'>
                            <label>Player Name</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Name}
                                onChange={this.handlePlayerNameChange}
                            ></input>
                        </div>
                        <div className='playerPrice'>
                            <label>Player Price</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Price}
                                onChange={this.handlePlayerPriceChange}
                            ></input>
                        </div>
                        <div className='playerPoster'>
                            <label>Player Poster Url</label>
                            <textarea
                                row='3'
                                className='form-control'
                                value={this.state.Poster}
                                onChange={this.handlePlayerPosterChange}
                            ></textarea>
                        </div>
                        <div className='createPlayer'>
                            <button type="submit">Add Player</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}