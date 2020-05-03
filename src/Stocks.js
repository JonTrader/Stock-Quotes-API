import React from 'react';

export default class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state =
        {
            stockSymbol: 'SPY',
            price: ''
        }
    }

    handleSubmit = e =>
    {
        e.preventDefault();
        this.setState({ stockSymbol: this.textInput.current.value})
    };

    componentDidMount()
    {
        this.fetchStock();
    }

    fetchStock()
    {
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockSymbol}&apikey=HC59HK11T8SB44OT`;

        fetch(API_CALL)
            .then
            (
                function(response)
                {
                    return response.json()
                }
            )
            .then
            (
                function(data)
                {
                    console.log(data);
                }
            )
    }

    render()
    {
        return (
            <div>
                <h1>Ticker: {this.state.stockSymbol} </h1>
                
                <input type="text" ref={this.textInput}/>
                <button onClick={this.handleSubmit}>Change Ticker</button>
            </div>
        );

    }



}