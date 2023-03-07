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
        setCartItems(lastState => [...lastState, img]);
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

    function checkCartItem(id){
        return cartItems.some((img) => img.id == id);
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addCartItem, checkCartItem}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}