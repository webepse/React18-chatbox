import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Connexion extends Component {
    state = { 
        pseudo: "",
        goToChat: false
     } 
    render() { 
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input 
                        value={this.state.pseudo}
                        placeholder="Pseudo"
                        type="text"
                        required
                    />
                    <button type="submit">GO</button>
                </form>
            </div>
        );
    }
}
 
export default Connexion;