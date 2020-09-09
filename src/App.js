import React from 'react';

import {Header} from './components/Header';
import  {Cards } from './components/Cards';
import {Chart} from './components/Chart';
import Styles from './App.module.css';
import {fetchData} from './api'
import { Component } from 'react';
import {CountryPicker} from './components/CountryPicker';


class App extends  Component {

  state = {
    data:{},
    country:'',
  }
 async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({data: fetchedData})
 }
 handleCountryChange(country){
   //fetch the data
   //handle the change
   console.log(country);
 }
 
  render(){
  const { data } = this.state;
  

  return (
  <div>
    <Header />
    <div className={Styles.container}>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Chart />
    </div>
    </div>
  );
}
}
export default App;
