import React, {useState, useEffect} from 'react'
import {fetchDaily} from '../api/index'
import {Line} from 'react-chartjs-2';
import Styles from './Chart.module.css';
import {Bar} from 'react-chartjs-2';

export const Chart = ({ data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDaily());
        }
        console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length !==  0 ? (
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
    const barChart = (
        confirmed ?(
        <Bar 
            data={{
                labels: ['infected', 'Recovered', 'Deaths'],
                datasets:[{
                    
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        //rgba('red', 'green', 'blue', 'alpha)

                        //red : red defines the intensity of red as an integer between 0 and 255
                        // or as a percentage of 0% and 100%

                        //green: green defines the intensity of green as an integer between 0 and 255
                        // or as a percentage of 0% and 100%

                        // blue: blue defines the intensity of blue as an integer between 0 and 255
                        // or percetage of 0% and 100%
                        
                        // alpha: alpha defines the opacity between 0.0 and 1.0. 0.0 means fully 
                        //transparent and 1.0 means opaque.

                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }}

            options={{
                legends:{display:false},
                title:{display:true, text:`Current state in ${country}`}
            }}
        />
        )
        : null
    );
    return (
        <div className={Styles.container}>
         {country ? barChart : lineChart}
        </div>
    )
}
