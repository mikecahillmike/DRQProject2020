import React from 'react';
import { Item} from './item';
import '../App.css';


export class Players extends React.Component{

    render(){
        return this.props.players.map( (player)=>{ 
            return <Item key={player._id} player={player} ReloadData={this.props.ReloadData}></Item>

        })
            

    }
}