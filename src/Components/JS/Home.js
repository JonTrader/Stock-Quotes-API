import React from 'react';
import '../CSS/Home.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state =
        {

            price: '',
            high: '',
            low: '',
            volume: '',
            prevClose: '',
            changePercent: ''
        }
    }

    componentDidMount(ticker)
    {
        this.fetchStock(ticker);
    }

    fetchStock(ticker)
    {
        var priceFunction;
        var highFunction= '';
        var lowFunction = '';
        var volumeFunction = '';
        var prevCloseFunction = '';
        var changePercentFunction = '';

        let API_CALL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMD&apikey=HC59HK11T8SB44OT`
        const pointerToThis = this;

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
                    priceFunction = (data["Global Quote"]["05. price"]);
                    highFunction = (data["Global Quote"]["03. high"])
                    lowFunction = (data["Global Quote"]["04. low"])
                    volumeFunction = (data["Global Quote"]["06. volume"])
                    prevCloseFunction = (data["Global Quote"]["08. previous close"])
                    changePercentFunction = (data["Global Quote"]["10. change percent"])

                    pointerToThis.setState({
                        price: priceFunction,
                        high: highFunction,
                        low: lowFunction,
                        volume: volumeFunction,
                        prevClose: prevCloseFunction,
                        changePercent: changePercentFunction
                    })
                }
                
            )
    }





    render()
    {
        return(
            <div>
                <h2>Hello</h2>
                <p>{this.state.price}</p>
                <p>{this.state.high}</p>
                <p>{this.state.low}</p>
                <p>{this.state.volume}</p>
                <p>{this.state.prevClose}</p>
                <p>{this.state.changePercent}</p>
            </div>
            
        );
    }

}