import React, { useContext } from "react"
import { Context } from '../Context'
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover";

function Image({className, img}) {
    const [ hovered, ref ] = useHover();

    const {cartItems, toggleFavorite, addCartItem, checkCartItem, removeCartItem} = useContext(Context)

    function heart(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        }

        if(hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    function cart(){
        if(cartItems.some(item => item.id == img.id)){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItem(img.id)}></i>
        }

        if(hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addCartItem(img)}></i>
        }
    }

    return (
        <div className={`${className} image-container`} ref={ref}>   
            {heart()}
            {cart()}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes ={
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
