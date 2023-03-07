import React, { useState, useEffect } from "react"

const Context = React.createContext()

function  ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([]);



    useEffect(()=>{
        const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setAllPhotos(response)
            })
    }, [])

    function toggleFavorite(id){
        const selectedPhoto = allPhotos.map(photo => {
            if(photo.id === id){
                photo.isFavorite = !photo.isFavorite
            }

            return photo;
        });

        setAllPhotos(selectedPhoto);
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}