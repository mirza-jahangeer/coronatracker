import React, {useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import {countries} from '../api/index';
import Styles from './CountryPicker.module.css';

export const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await countries())
        }
        fetchCountries()
    }, [setFetchedCountries])
    return (
     
            <FormControl className={Styles.container}>
                <NativeSelect onChange={(e)=> props.handleCountryChange(e.target.value)}>
                    <option value="global">Global</option>
                    {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
     
    )
}
