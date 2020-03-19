import React, { Component } from 'react';
import axios from 'axios';

export default class PlayerForm extends Component {

    submitPlayer(e) {
        e.preventDefault();

        axios.post('http://localhost:4000/players', {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="row">
            <h1 className="center">Add a new player</h1>
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                id="firstName" 
                                ref="firstName" 
                                type="text" 
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input 
                                id="lastName" 
                                ref="lastName"
                                type="text" 
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                                id="phone" 
                                ref="phone" 
                                type="text"
                            />
                            <label htmlFor="phone">phone</label>
                        </div>
                        <div className="input-field col s6">
                            <input 
                                id="email" 
                                type="email" 
                                ref="email"
                            />
                            <label htmlFor="email">email</label>
                        </div>
                    </div>
                    <button 
                        className="btn waves-effect waves-light" 
                        type="submit"
                        name="action"
                    >Add</button>
                </form>
            </div>
        );
    }
}
