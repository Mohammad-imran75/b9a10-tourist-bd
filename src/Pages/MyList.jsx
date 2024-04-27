import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyList = () => {
    const {user,loading} = useContext(AuthContext);
    const [spots, setSpots] = useState([]);
    console.log(spots)
    const url = (`http://localhost:5000/touristSpots?email=${user?.email}`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    return (
        <div>
<h1>My list page</h1>            
        </div>
    );
};

export default MyList;