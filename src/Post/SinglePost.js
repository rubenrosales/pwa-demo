import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class SinglePost extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor () {
        super();
        this.state = {
            name : "",
            src : ""
        };
    }
    sendPricePusher (data) {
        axios.post('/prices/new', {
            prices: data
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    getPosts(){
        axios.get('https://api.myjson.com/bins/ivhsh')
               .then(response => {
                    return response.data.images;
               })
               // Catch any error here
               .catch(error => {
                   console.log(error)
               })
    }
    componentDidMount () {
        if (!navigator.onLine) {
            // this.setState({ btcprice: localStorage.getItem('BTC') });
            // this.setState({ ethprice: localStorage.getItem('ETH') });
            // this.setState({ ltcprice: localStorage.getItem('LTC') });
        }
        else{
          console.log(this.props)
            const uuid = this.props.match.params.name;
            axios.get('https://api.myjson.com/bins/ivhsh')
               .then(response => {
                  const p = response.data.images.find(function(element) {
                    return element.name == uuid;
                  });
                  this.setState({ name: p.name });
                  this.setState({ src: p.src });
               })
               // Catch any error here
               .catch(error => {
                   console.log(error)
               })
            // We bind to the 'prices' event and use the data in it (price information) to update the state values, thus, realtime changes 
           
        }
        
    }
    createEntry(entry){
        return <tr>
                <td>{entry.name}</td>
                <td>{entry.field1}</td>
                <td><Link to={`/post/${entry.name}`}>{entry.field2}</Link></td>
            </tr>;
        //<Image source={image} key={image} />;
    }
    createEntries(entries){
        return entries.map(this.createEntry)
    }
    // This is called when an instance of a component is being created and inserted into the DOM.
    componentWillMount () {
        // establish a connection to Pusher
        // this.pusher = new Pusher("faa2900ce6074cf572de", {
        //     cluster: "us2",
        //     encrypted: true
        // });
        // // Subscribe to the 'coin-prices' channel
        // this.prices = this.pusher.subscribe('coin-prices');
        //     axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
        //         .then(response => {
        //             // We set the latest prices in the state to the prices gotten from Cryptocurrency.
        //             this.setState({ btcprice: response.data.BTC.USD });
        //             this.setState({ ethprice: response.data.ETH.USD });
        //             this.setState({ ltcprice: response.data.LTC.USD });
        //         })
        //         // Catch any error here
        //         .catch(error => {
        //             console.log(error)
        //         })
    }
    // The render method contains the JSX code which will be compiled to HTML.
    render() {
        return (
          <div>
            <h1>{this.state.name} (#{this.state.name})</h1>
            <h2>Position: {this.state.name}</h2>
            <img src = {this.state.src} />
            <Link to='/post'>Back</Link>
        </div>
        )
    }
}

export default SinglePost;