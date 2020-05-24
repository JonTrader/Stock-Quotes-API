import React from 'react';
import '../CSS/Stocks.css';
import createPlotlyComponent from 'react-plotly.js/factory';
import NavigationBar from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



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
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" ref={this.textInput}/>
                            <input type="submit" value="Change Ticker" />
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
                                    marker: {color: 'blue'},
                                },
                            ]}
                            layout={ {width: 800, height: 500 } }
                        />
                    </Row>
                </Container>
            </div>
        );

    }



}