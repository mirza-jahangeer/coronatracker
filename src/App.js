import React from 'react';

import {Header} from './components/Header';
import  {Cards } from './components/Cards';
import {Chart} from './components/Chart';
import Styles from './App.module.css';
import {fetchData} from './api'
import { Component } from 'react';
import {CountryPicker} from './components/CountryPicker';
import {Footer} from './components/Footer';

class App extends  Component {

  state = {
    data:{},
    country:'',
  }
 async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({data: fetchedData})
 }
 handleCountryChange = async (country) => {
   //fetch the data
   //handle the change
   const fetchedData = await fetchData(country);
   this.setState({data: fetchedData, country:country})
   console.log(country);
 }
 
  render(){
  const { data, country} = this.state;
  

  return (
  <div>
    <Header />
    <div className={Styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange} data={data} country={country}/>
      <Chart data={data} country={country}/>
      
    </div>
   
    </div>
  );
}
}
export default App;
