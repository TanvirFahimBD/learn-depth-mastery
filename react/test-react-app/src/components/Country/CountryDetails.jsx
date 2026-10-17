import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CountryDetails = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState(null);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data[0]);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
    }, [countryName]);

    console.log('CountryDetails state:', country);

    if(!country) {
        return <div>Loading...</div>;
    }

    return (
        <div>
             <img src={country.flags.png} alt={`${country.name.common} flag`} width="100" height="60" />
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p>Languages: {Object.values(country.languages).join(', ')}</p>
            <p>Population: {country.population}</p>
            <p>Continents: {country.continents[0]}</p>
            <p>Region: {country.region}</p>
        </div>
    );
};

export default CountryDetails;