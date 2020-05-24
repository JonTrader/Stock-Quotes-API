import React from 'react';
import '../CSS/Stocks.css';
// import createPlotlyComponent from 'react-plotly.js/factory';
import NavigationBar from './NavigationBar';



export default class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state =
        {
            stockChartXValues: [],
            stockCartYValues: [],
            price: '',
            ticker: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = e =>
    {
        e.preventDefault();
        this.setState({ ticker: this.textInput.current.value})
        this.fetchStock();
    };

    fetchStock = () =>
    {
        // const pointerToThis = this;
        // let stockCartXValuesFunction = [];
        // let stockCartYValuesFunction = [];
        // var priceFunction = '';

        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey=HC59HK11T8SB44OT`)
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
                    // priceFunction = (data["Global Quote"]["05. price"])

                    // for(var key in data['Time Series (Daily)'])
                    // {
                    //     // stockCartXValuesFunction.push(key);
                    //     // stockCartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    // }

                    // pointerToThis.setState({
                    //     // stockChartXValues: stockCartXValuesFunction,
                    //     // stockCartYValues: stockCartYValuesFunction
                    //     price: priceFunction
                    // })
                }
            )
    }

    render()
    {
        // const Plotly = window.Plotly;
        // const Plot = createPlotlyComponent(Plotly);

        return (
            <div>
                <NavigationBar />
                
                <form onSubmit={this.handleSubmit}>
                    <h3>Ticker: {this.state.ticker} </h3>
                    <input type="text" ref={this.textInput}/>
                    <input type="submit" value="Change Ticker" />
                </form>
                <p>{this.state.price}</p>
                <br/>
                <br/>
                <br/>

                {/* <Plot
                    data=
                    {[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockCartYValues,
                            type: 'scatter',
                            mode: 'lines',
                            marker: {color: 'green'},
                        },
                    ]}
                    layout={ {width: 800, height: 500 } }
                /> */}
            </div>
        );

    }



}