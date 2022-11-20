import React, { Component } from 'react';
import CoutryCard from './CountryCard';
import axios from 'axios';




export default class CountryList extends Component {
  state = {
    countries: [],
    limit:10
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v2/all')
      .then(rsp => this.setState({ countries: rsp.data })
      )
  } searchHandler = (e) => {
    axios.get('https://restcountries.com/v2/name/' + e.target.value)
      .then(res => this.setState({
        countries: res.data
      }))
  }
  

  render() {
    const countryList = this.state.countries.slice(0,this.state.limit).map(c => {
      return (

        <CoutryCard country={c} key={c.numericCode} />
        
      )
    })
    return (
      <div style={{textAlign:"center"}}>
      
      <div className='d-flex flex-wrap'>
        <input type="text" className='form-control m-3' style={{ width: "1000px" }} onChange={this.searchHandler} placeholder='Country Name' />
        {countryList}
      </div> 
      {this.state.limit<250 && <button onClick={() => this.setState({ limit: this.state.limit + 100 }) }>Load More</button>}


      </div>
    )


  }
}
