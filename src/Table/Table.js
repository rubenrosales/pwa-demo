import React, { Component } from 'react';
import './Table.css'
import data from '../data/data.json';

class Table extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor () {
        super();
        this.state = {
            btcprice: '',
            ltcprice: '',
            ethprice: ''
        };
    }

    componentDidMount () {
       
    }
    // This is called when an instance of a component is being created and inserted into the DOM.
    componentWillMount () {
    
    }
    // The render method contains the JSX code which will be compiled to HTML.
    createEntry(entry){
        return <tr>
                <td>{entry.name}</td>
                <td>{entry.field1}</td>
                <td>{entry.field2}</td>
            </tr>;
        //<Image source={image} key={image} />;
    }
    createEntries(entries){
        return entries.map(this.createEntry)
    }
    // The render method contains the JSX code which will be compiled to HTML.
    render() {
        return (
            <div className="today--section container">
                <h2>Current Price</h2>
                <div className="columns today--section__box">
                    <table>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th> 
                            <th>Age</th>
                        </tr>
                        {this.createEntries(data.images)}
                    </table>
                </div>
            </div>
        )
    }
}


export default Table;