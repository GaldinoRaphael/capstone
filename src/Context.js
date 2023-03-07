import React, { useState, useEffect } from "react"

const Context = React.createContext()

function  ContextProvider({children}){
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
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}