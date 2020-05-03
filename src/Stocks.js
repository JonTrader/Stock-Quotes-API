import React from 'react';


export default class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state =
        {
            stockChartXValues: [],
            stockCartYValues: [],
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
        const pointerToThis = this;
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockSymbol}&apikey=HC59HK11T8SB44OT`;
        let stockCartXValuesFunction = [];
        let stockCartYValuesFunction = [];

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

                    for(var key in data['Time Series (Daily)'])
                    {
                        stockCartXValuesFunction.push(key);
                        stockCartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    pointerToThis.setState({
                        stockChartXValues: stockCartXValuesFunction,
                        stockCartYValues: stockCartYValuesFunction
                    })
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