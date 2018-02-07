import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './FullPost.css'

class FullPost extends Component {
    // Adds a class constructor that assigns the initial state values:
    constructor () {
        super();
        this.state = {
            posts : [],
            newPosts : []
        };
    }

    filterList(event){
        var updatedList = this.state.posts;
        updatedList = updatedList.filter(function(item){
        return item.name.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({newPosts: updatedList});
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

            axios.get('https://api.myjson.com/bins/ivhsh')
               .then(response => {
                this.setState({ posts: response.data.images });
                this.setState({ newPosts: response.data.images });
               })
               // Catch any error here
               .catch(error => {
                   console.log(error)
               })
            // We bind to the 'prices' event and use the data in it (price information) to update the state values, thus, realtime changes 
           
        }
        
    }
    createEntry(entry){
        return <li key={entry.name}>
                <a href={`/post/${entry.name}`}><img src= {entry.src}/></a>
                <p>{entry.name}</p>
                <p>{entry.field1}</p>
            </li>;
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
            <div className="today--section container">
                <h2><Link to={`/`}>Full Posts</Link></h2>
                <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
                <div className="columns today--section__box">
                    <ul className = 'rows'>
                        {this.createEntries(this.state.newPosts)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default FullPost;