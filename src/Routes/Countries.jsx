import { useEffect, useState } from "react";
import CountriesSubdata from "./CountriesSubdata";

const Countries = () => {
    const [countries,setCountries] = useState([]);
    console.log(countries)
    useEffect(()=>{
        fetch("https://assignment-ten-serverside.vercel.app/countries")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            {
                <div className="grid lg:grid-cols-3">
                    {
                        countries.map((property)=><CountriesSubdata key={property._id} property={property}></CountriesSubdata>)
                    }
                </div>
            }
        </div>
    );
};

export default Countries;