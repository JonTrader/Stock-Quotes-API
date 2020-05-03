import React from 'react';

export default class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            stockSymbol: 'SPY'
        }
    }

    componentDidMount()
    {
        this.fetchStock();
    }

    fetchStock()
    {
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=HC59HK11T8SB44OT`;

        fetch(API_CALL)
            .then(function(response) { return response.json()})
            .then(function(data){console.log(data)})
    }

    render()
    {
        return (
            <div>

                <h1>Ticker: {this.state.stockSymbol} </h1>
                <input type="text" />
                <button>Change Ticker</button>
                
            </div>
        );

    }



}