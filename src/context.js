import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
              id: 1,
              name: "John Doe",
              email: "jdoe@gmail.com",
              phone: "555-555-5555"
            },
            {
              id: 2,
              name: "Ryan Boddy",
              email: "ryanboddyweb@gmail.com",
              phone: "321-287-7977"
            },
            {
              id: 3,
              name: "Baylee Boddy",
              email: "bayleeboddy@gmail.com",
              phone: "251-223-7515"
            }
          ]
    }

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
