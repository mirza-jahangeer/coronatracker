import React, {useState, useEffect} from 'react'
import {fetchDaily, fetchData} from '../api/index'
import {Line, Bar} from 'react-chartjs-2';
import Styles from './Chart.module.css';

export const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDaily());
        }
        console.log(dailyData);
        fetchAPI();
    });

    const lineChart = (
        dailyData.length != 0 ? (
            <Line
        
            data={{
                labels:dailyData.map(({date}) => date),
                datasets:[{
                    data:dailyData.map(({confirmed}) => confirmed),
                    label:"Infected",
                    borderColor:"#3333ff",
                    fill:true
                    
                }, {
                    data:dailyData.map(({deaths}) => deaths),
                    label:"Deaths",
                    borderColor:"red",
                    fill:true,
                    backgroundColor: 'rgba(255, 0, 0, 0.5)'
                }]

            }}
            />

        ) : null


    )
    return (
        <div className={Styles.container}>
          {lineChart}
        </div>
    )
}
