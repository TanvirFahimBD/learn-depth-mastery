import { Link } from "react-router";

const Country = ({ country, onVisit }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <img src={country.flags.png} alt={`${country.name.common} flag`} width="100" height="60" />
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <Link to={`/countries/${country.name.common}`}>View Details</Link>
            <br />

           {!country.visited &&  <button onClick={() => onVisit(country)}>Mark as Visited</button> }

            {country.visited && <span style={{ color: 'green', marginLeft: '10px' }}> 
                <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none">
                    <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                    <path d="M7 12l3 3 7-7"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>  Visited  </span>
            }
        </div>
    );
};

export default Country;