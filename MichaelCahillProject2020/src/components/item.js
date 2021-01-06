import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class Item extends React.Component {

    constructor(){
        super();

        this.DeletePlayer = this.DeletePlayer.bind(this); 
    }

    // Delete method
    DeletePlayer(e){
        e.preventDefault();
        console.log("Delete: " + this.props.player._id); 
        // Problem with the axios as it is not deleting the player but is enter the method
        axios.delete("http://localhost:4000/api/players/" + this.props.player._id)
        .then()
      .catch();
    // Reload page when player is deleted
    window.location.reload(true);

    }

    render() {
        return (
            <div> 
                <Card border="primary" style={{ width: window.innerWidth }}>
                    <Card.Header style={{ fontWeight: "bold", fontSize: "20px", backgroundColor: "#D2B48C" }}>{this.props.player.name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.player.poster} width="400" height="300"></img>
                            <footer className="blockquote-footer" style={{ fontWeight: "bold", fontSize: "20px" }}>
                                {this.props.player.price}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeletePlayer}>Remove Player from the transfer list</Button>
          <Link to={"/edit/" + this.props.player._id} className="btn btn-success">Edit Player</Link>
          </Card>

            </div>

        );
    }
}