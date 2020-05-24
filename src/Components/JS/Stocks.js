import React from 'react';
import '../CSS/Stocks.css';
import createPlotlyComponent from 'react-plotly.js/factory';
import NavigationBar from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'



export default class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state =
        {
            error: "",
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
        this.setState({ ticker: this.textInput.current.value});
    };

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const pointerToThis = this;
        let stockCartXValuesFunction = [];
        let stockCartYValuesFunction = [];

        if(this.state.ticker !== prevState.ticker)
        {
            
            fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.ticker}&apikey=HC59HK11T8SB44OT`)
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

                    if (data.Note === undefined && data["Error Message"] === undefined)
                    {

                        for(var key in data['Time Series (Daily)'])
                        {
                            stockCartXValuesFunction.push(key);
                            stockCartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                        }

                        pointerToThis.setState({
                            stockChartXValues: stockCartXValuesFunction,
                            stockCartYValues: stockCartYValuesFunction,
                            error: ""
                        })
                    }
                    else if (data["Error Message"] !== undefined)
                    {
                        pointerToThis.setState({
                            error: "Invalid Symbol"
                        })
                    }
                    else
                    {
                        pointerToThis.setState({
                            error: "Please be patient. API will be back up. Refresh in 1 minute. Thank You!"
                        })
                    }
                }
            )
        }
     }
        

    render()
    {
        const Plotly = window.Plotly;
        const Plot = createPlotlyComponent(Plotly);

        return (
            <div>
                <NavigationBar />
                <Container>
                    <Row className="justify-content-around mtCustom">
                        <h1>Change Symbol</h1>
                    </Row>

                    <br/>

                    <Row className="justify-content-around">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" ref={this.textInput}/>
                            <input className="changeBtn" type="submit" value="Submit" />
                        </form>
                    </Row>

                    <br/>
                    <br/>
                    <br/>
                    
                    <Row className="justify-content-center">
                        <h3>Ticker: <span> {this.state.ticker}</span></h3>
                    </Row>

                    <Row className="justify-content-center">
                        <Plot
                            data=
                            {[
                                {
                                    x: this.state.stockChartXValues,
                                    y: this.state.stockCartYValues,
                                    type: 'scatter',
                                    mode: 'lines',
                                    line: {color: 'rgb(0, 60, 80)'},
                                },
                            ]}
                            layout={ {width: 900, height: 500, title: '100 Day/Daily Chart' } }
                        />
                    </Row>

                    <br />

                    <Row className="justify-content-center">
                        <p>{this.state.error}</p>
                    </Row>
                </Container>
            </div>
        );

    }



}