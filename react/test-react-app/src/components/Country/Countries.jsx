import { useEffect, useState } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags')
        .then(res => res.json())
        .then(data => { 
            setCountries(data);
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });
    }, [])

    const handleVisit = (country) => {
        countries.forEach(c => {
            if(c.name.common === country.name.common) {
                c.visited = true;
            }
        });
        setCountries([...countries]);
    };

    const total = countries.length;

    if(total === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{margin: '20px'}}>
            <h2>Total Countries: {total}</h2>
            <div className="countries"> 
                {
                    countries.map(country => <Country key={country.name.common} country={country} onVisit={handleVisit} />)
                }
            </div>
        </div>
    );
};

export default Countries;