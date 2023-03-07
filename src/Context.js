import React, { useState, useEffect } from "react"

const Context = React.createContext()

function  ContextProvider({children}){
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setAllPhotos(response)
            })
    }, [])

    function addCartItem(img){
        setCartItems([...cartItems, img]);
    }

    function toggleFavorite(id){
        const updatePhotos = allPhotos.map(photo => {
            if(photo.id === id){
               return {...photo, isFavorite: !photo.isFavorite}
            }

            return photo;
        });

        setAllPhotos(updatePhotos);
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addCartItem}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}