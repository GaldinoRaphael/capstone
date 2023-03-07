import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [ordering, setOrdering] = useState(false)

    const {cartItems, cleanCart} = useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    function totalValue(items){
        const totalCost = items.length * 5.99;
        return totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    }

    function order(){
        setOrdering(true);

        setTimeout(() => {
            cleanCart();
            setOrdering(false);
            console.log('Order placed');
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalValue(cartItems)}</p>
            {cartItems.length ? <div className="order-button" onClick={order}>
                <button>{!ordering ? 'Place Order' : 'Ordering..'}</button>
            </div> : <p>You have no items in your cart.</p>}
        </main>
    )
}

export default Cart