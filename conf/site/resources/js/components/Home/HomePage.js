import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HistoryGraph from '../Graphics/HistoryGraph';
import LatestResults from '../Graphics/LatestResults';
import Footer from './Footer';
import DataRow from '../Data/DataRow';
import TestsTable from '../Graphics/TestsTable';
import Login from '../Login';
import Authentication from '../Authentication/Authentication';
import Navbar from '../Navbar';

export default class HomePage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <div className="my-4">
                    {(window.config.auth == true && window.authenticated == false) &&
                        <Login />
                    }
                    <LatestResults />
                    <HistoryGraph />
                </div>
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('homePage')) {
    ReactDOM.render(<HomePage />, document.getElementById('homePage'));
}
