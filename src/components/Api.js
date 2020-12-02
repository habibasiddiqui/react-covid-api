import React, { useState, useEffect} from 'react';
import axios from 'axios'; 

function Api() {
    const [obj, setObj] = useState({});
    useEffect(
        () => {
            axios.get('https://api.covid19api.com/')
            .then(
                res => {
                    console.log(res.data);
                    setObj(res.data);
                }
            )
        }, []
    )
    
    console.log(obj.countriesRoute);
    // let countries = obj.countriesRoute;
    return (
        <div>
            {/* <p>{countries}</p> */}
        </div>
    )
}

export default Api
