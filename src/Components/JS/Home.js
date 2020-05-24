import React from 'react';
import '../CSS/Home.css'
import NavigationBar from './NavigationBar.js'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state =
        {
            energy: '',
            info_tech: '',
            health_care: '',
            real_estate: '',
            finance: '',
            industrials: '',
            com_services: '',

            Yenergy: '',
            Yinfo_tech: '',
            Yhealth_care: '',
            Yreal_estate: '',
            Yfinance: '',
            Yindustrials: '',
            Ycom_services: ''
        }
    }

    componentDidMount()
    {
        this.fetchStock();
    }

    fetchStock()
    {
        var energyF;
        var info_techF;
        var health_careF;
        var real_estateF;
        var financeF;
        var industrialsF;
        var com_servicesF;

        var YenergyF;
        var Yinfo_techF;
        var Yhealth_careF;
        var Yreal_estateF;
        var YfinanceF;
        var YindustrialsF;
        var Ycom_servicesF;

        const pointerToThis = this;

        let API_CALL = `https://www.alphavantage.co/query?function=SECTOR&apikey=HC59HK11T8SB44OT`
        

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
                    energyF = (data["Rank E: 3 Month Performance"].Energy);
                    info_techF = (data["Rank E: 3 Month Performance"]["Information Technology"])
                    health_careF = (data["Rank E: 3 Month Performance"]["Health Care"])
                    real_estateF = (data["Rank E: 3 Month Performance"]["Real Estate"])
                    financeF = (data["Rank E: 3 Month Performance"].Financials)
                    industrialsF = (data["Rank E: 3 Month Performance"].Industrials)
                    com_servicesF = (data["Rank E: 3 Month Performance"]["Communication Services"])

                    YenergyF = (data["Rank G: 1 Year Performance"].Energy);
                    Yinfo_techF = (data["Rank G: 1 Year Performance"]["Information Technology"])
                    Yhealth_careF = (data["Rank G: 1 Year Performance"]["Health Care"])
                    Yreal_estateF = (data["Rank G: 1 Year Performance"]["Real Estate"])
                    YfinanceF = (data["Rank G: 1 Year Performance"].Financials)
                    YindustrialsF = (data["Rank G: 1 Year Performance"].Industrials)
                    Ycom_servicesF = (data["Rank G: 1 Year Performance"]["Communication Services"])

                    pointerToThis.setState({
                        
                        energy: energyF,
                        info_tech: info_techF,
                        health_care: health_careF,
                        real_estate: real_estateF,
                        finance: financeF,
                        industrials: industrialsF,
                        com_services: com_servicesF,
     
                        Yenergy: YenergyF,
                        Yinfo_tech: Yinfo_techF,
                        Yhealth_care: Yhealth_careF,
                        Yreal_estate: Yreal_estateF,
                        Yfinance: YfinanceF,
                        Yindustrials: YindustrialsF,
                        Ycom_services: Ycom_servicesF

                    })
                }
            ) 
    }


    render()
    {
        return(
            <>
                <NavigationBar />

                <Jumbotron>
                </Jumbotron>

                <Container className="bgcoll">
                    <Row className="justify-content-center">
                        <h2>Performance By Sector</h2>
                    </Row>

                    <br />
                    <br />

                    <Row className="justify-content-around">
                        <Col s md="4">
                            <ul>
                                <h4>3 Month Performance</h4>
                                <li>Energy: {this.state.energy}</li>
                                <li>Information Technology: {this.state.info_tech}</li>
                                <li>Health Care: {this.state.health_care}</li>
                                <li>Real Estate: {this.state.real_estate}</li>
                                <li>Finance: {this.state.finance}</li>
                                <li>Industrials: {this.state.industrials}</li>
                                <li>Communication Services: {this.state.com_services}</li>
                            </ul>
                        </Col>

                        <Col s md="4">
                            <ul>
                                <h4>1 Year Performance</h4>
                                <li>Energy: {this.state.Yenergy}</li>
                                <li>Information Technology: {this.state.Yinfo_tech}</li>
                                <li>Health Care: {this.state.Yhealth_care}</li>
                                <li>Real Estate: {this.state.Yreal_estate}</li>
                                <li>Finance: {this.state.Yfinance}</li>
                                <li>Industrials: {this.state.Yindustrials}</li>
                                <li>Communication Services: {this.state.Ycom_services}</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>






            </> 
        );
    }

}