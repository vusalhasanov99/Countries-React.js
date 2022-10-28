import React, { Component } from 'react';
import CoutryCard from './CountryCard';
import axios from 'axios';


export default class CountryList extends Component {
  state={
    countries:[]
  }
  componentDidMount(){
    axios.get('https://restcountries.com/v2/all')
    .then(rsp=>this.setState({countries:rsp.data})
      )
  }searchHandler=(e)=>{
    axios.get('https://restcountries.com/v2/name/'+e.target.value)
    .then(res=>this.setState({
      countries:res.data
    }))
  }
  render() {
        const countryList=this.state.countries.map(c=>{
            return(
        
               <CoutryCard country={c} key={c.numericCode} />
            )
        })
        return(
            <div className='d-flex flex-wrap'>
              <input type="text" className='form-control m-3' style={{width:"1000px"}} onChange={this.searchHandler} placeholder='Country Name' />
              {countryList}
              </div>
        )
    
    
  }
}
