import React, { useState, useEffect } from 'react';
import axios from 'axios'

function safe(x){
    if (x) {
        return x.replace(/\{/g,"")
    }
    return null
}

function APIThing({ term }) {

    // const MyUrl = format(term)

    const [Data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(term)

            setData(result.data)
        }

        fetchData(term)
    })

    // const n = data
    
    //let wikioutput = []
    // axios.get(term).then((response) => {for (let i in response.data.query.pages) wikioutput.push(response.data.query.pages[i])})
    // console.log(wikioutput)
        
    // function safe(x){
    //     console.log("test", x[0], x)
    //     if (x[0]){
    //       console.log("test2", x[0], x[0].title)
    //       return x[0].title
    //     }
    // }

    return (
        <>
           <p>{safe(JSON.stringify(Data))}</p>
    
        </>
    )
}


export default APIThing;