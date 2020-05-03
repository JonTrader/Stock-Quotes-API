import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';



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
        this.componentDidMount();
    };

    componentDidMount()
    {
        this.fetchStock();
    }

    fetchStock()
    {
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.stockSymbol}&apikey=HC59HK11T8SB44OT`;
        const pointerToThis = this;
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
        const Plotly = window.Plotly;
        const Plot = createPlotlyComponent(Plotly);
        var ticker = this.state.stockSymbol;

        return (
            <div>
                <h1>Ticker: {ticker} </h1>
                
                <input type="text" ref={this.textInput}/>
                <button onClick={this.handleSubmit}>Change Ticker</button>
                <br/>
                <br/>
                <br/>

                <Plot
                    data=
                    {[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockCartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        },
                    ]}
                    layout={ {width: 1200, height: 500 } }
                />
            </div>
        );

    }



}