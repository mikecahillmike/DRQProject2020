import React from 'react';
import axios from 'axios'; 

export class Edit extends React.Component {

    
    constructor() {
        super();
        this.state = {
            Name: '',
            Price: '',
            Poster: ''
        }
 
        this.handleProductNameChange = this.handleProductNameChange.bind(this); 
        this.handleProductPriceChange = this.handleProductPriceChange.bind(this);
        this.handleProductPosterChange = this.handleProductPosterChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){// Method for getting player id to edit the details of that player
        console.log(this.props.match.params.id); 

        axios.get('http://localhost:4000/api/players/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
                _id:response.data._id,
                Name:response.data.name,
                Price:response.data.price,
                Poster:response.data.poster    
            })
        })
        .catch((error)=>{
            console.log(error); // Catch error and log to the console
        })
    }

    // Functions to handle the players details change
    handleProductNameChange(e) {
        this.setState({ Name: e.target.value });
    }
    handleProductPriceChange(e) {
        this.setState({ Price: e.target.value });
    }
    handleProductPosterChange(e) {
        this.setState({ Poster: e.target.value });
    }
    // Function to handle submit request
    handleSubmit(e) {
        alert(this.state.Name + "      " + this.state.Price
            + "       " + this.state.Poster);
        e.preventDefault();
        
        const newPlayer = { // New player
            name: this.state.Name,
            price: this.state.Price,
            poster: this.state.Poster,
            _id: this.state._id 

        }
        // posting the edits and upadting database
       axios.put('http://localhost:4000/api/players/' + this.state._id, newPlayer) 
       .then(res =>{
           console.log(res.data)
       })
       .catch()
        
       // Set the state
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
                    <h1>Edit Player</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='playerName'>
                            <label>Player Name</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Name}
                                onChange={this.handleProductNameChange}
                            ></input>
                        </div>
                        <div className='playerPrice'>
                            <label>Player Price</label>
                            <input
                                type='text'
                                className='form-control'
                                value={this.state.Price}
                                onChange={this.handleProductPriceChange}
                            ></input>
                        </div>
                        <div className='playerPoster'>
                            <label>Player Poster Url</label>
                            <textarea
                                row='3'
                                className='form-control'
                                value={this.state.Poster}
                                onChange={this.handleProductPosterChange}
                            ></textarea>
                        </div>
                        <div className='createPlayer'>
                            <button type="submit">Edit Player</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
