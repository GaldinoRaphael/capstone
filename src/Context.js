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

    function removeCartItem(id){
        setCartItems(lastState => lastState.filter((img) => img.id !== id))
    }

    function cleanCart(){
        setCartItems([])
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
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addCartItem, removeCartItem, cleanCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}