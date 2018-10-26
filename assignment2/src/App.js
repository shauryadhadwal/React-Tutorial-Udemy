import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

    state = {
        text: ''
    }

    textChangeHandler = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        let Chars = null;
        
        if (this.state.text.length > 5) {
            Chars = (<div>
                {this.state.text.split('').map((char, index) => {
                    let value = char;
                    if (char === ' ')
                        value = '.';
                    
                    return <CharComponent key={index} value={value}></CharComponent>   
                })}
                </div>);
        }
        
        return (
            <div className="App">
                <div className="input-container">
                    <input type="text" onChange={this.textChangeHandler} />
                </div>
                <Validation text={this.state.text}></Validation>
                {Chars}
            </div>
        );
  }
}

export default App;
