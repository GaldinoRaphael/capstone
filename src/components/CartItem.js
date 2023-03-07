import React, { useContext, useState } from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover";

function CartItem({item}) {
    const {removeCartItem} = useContext(Context);
    const [ hovered, ref ] = useHover();

    const trashItemClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i  className={trashItemClass}
                onClick={() => removeCartItem(item.id)} ref={ref}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem