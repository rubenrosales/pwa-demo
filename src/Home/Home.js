import React from 'react'
import { Switch, Route } from 'react-router-dom'
import History from '../History/History'
import Table from '../Table/Table'
import Today from '../Today/Today'

// The Roster component matches one of two different routes
// depending on the full pathname
const Home = () => (
    <div className="container">
        <div className="topheader">
                <header className="container">
                    <nav className="navbar">
                        <div className="navbar-brand">
                            <span className="navbar-item">PusherCoins</span>
                        </div>
                        <div className="navbar-end">
                            <a className="navbar-item" href="/post" rel="noopener noreferrer">Pusher.com</a>
                        </div>
                    </nav>
                </header>
        </div>
            <section className="results--section">
                <div className="container">
                    <h1>PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
                </div>
                <div className="results--section__inner">
                    <Today />
                    <History />
                </div>
            </section>
    </div>
)


export default Home

