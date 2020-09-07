import React,{ useState, useEffect} from 'react';
import {Button} from '@material-ui/core'
import {Header} from './components/Header';
import  Cards  from './components/Card';
import {Chart} from './components/Chart';
import Styles from './App.module.css';
import {fetchData} from './api'
import { Component } from 'react';


class App extends  Component {

  state = {
    data:{}
  }
 async componentDidMount(){
  const fetchedData = await fetchData();
  this.setState({data: fetchedData})
 }
 
  render(){
  const { data } = this.state;
  console.log(data)

  return (
  <div>
    <Header />
    <div className={Styles.container}>
      <Cards data={data}/>
      <Chart />
    </div>
    </div>
  );
}
}
export default App;
