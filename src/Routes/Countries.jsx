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
            <div>
                <h2 className="text-5xl p-7 text-center font-bold text-accent-content"> Countries section</h2>
            </div>
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