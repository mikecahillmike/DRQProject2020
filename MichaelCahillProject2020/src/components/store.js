import React from 'react';
import { Players } from './players';
import axios from 'axios';

export class Store extends React.Component {

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this)
    }
    // state with players array
    state = {
        players: []
    }

    componentDidMount() {  
        //axios call
        axios.get('http://localhost:4000/api/players')
            .then(response => {
                this.setState({ players: response.data }); 
            })
            .catch((error) => {
                console.log(error)
            })
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/players') 
            .then(response => {
                this.setState({ players: response.data });
            })
            .catch((error) => {
                console.log(error)  // Catch any error
            })

    }

    render() {
        return (
            <div>
                <h1>Listed transfer players</h1>
                <Players players={this.state.players} ReloadData={this.ReloadData}></Players>

            </div>
        );
    }
}