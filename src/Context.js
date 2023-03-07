import React, { useState, useEffect } from "react"

const {Provider, Consumer} = React.createContext()

function  UseContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(()=>{
        const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setAllPhotos(response)
            })
    }, [])

    console.log(allPhotos)
    return (
        <Provider value={{allPhotos}}>
            {children}
        </Provider>
    )
}

export {UseContextProvider, Consumer as UseContextConsumer}