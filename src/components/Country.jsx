import React from 'react'
import axios from 'axios'

class Country extends React.Component {
    state = {
        country: {}
    }
    componentDidMount() {
        let name = window.location.pathname;
        axios.get('https://restcountries.com/v2/name' + name + '?fullText=true')
            .then(rsp => {
                // console.log(rsp.data[0])
                this.setState({
                    country: rsp.data[0]
                })
            })
    }
    render() {

        const { country } = this.state
        return (
            <div className="container card" style={{ width: "18rem" }}>
                <img src={country.flag} className="card-img-top" alt="flag" />
                <div className="card-body">
                    <h5 className="card-title">Country: {country.name}</h5>
                    <p className="card-text">Capital: {country.capital}</p>
                    <p className="card-text">Population: {country.population}</p>
                    <p className="card-text">Area: {country.area} km <sup>2</sup></p>
                </div>
            </div>
        )
    }
}

export default Country;