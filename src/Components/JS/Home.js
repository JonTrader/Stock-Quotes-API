import React from 'react';
import '../CSS/Home.css'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state =
        {
            price: ''
        }
    }

    componentDidMount(ticker)
    {
        this.fetchStock(ticker);
    }

    fetchStock(ticker)
    {
        var price;
        var high= '';
        var low = '';
        var volume = '';
        var prevClose = '';
        var changePercent = '';

        let API_CALL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AMD&apikey=HC59HK11T8SB44OT`

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
                    price = (data["Global Quote"]["05. price"]);
                    high = (data["Global Quote"]["03. high"])
                    low = (data["Global Quote"]["04. low"])
                    volume = (data["Global Quote"]["06. volume"])
                    prevClose = (data["Global Quote"]["08. previous close"])
                    changePercent = (data["Global Quote"]["10. change percent"])
                }
                
            )
    }





    render()
    {
        return(
            <div>
                <h2>Hello</h2>
            </div>
            
        );
    }

}