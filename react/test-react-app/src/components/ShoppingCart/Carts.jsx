import { useEffect, useState } from 'react';
import './Carts.css';
import Cart from './Cart';

const Carts = () => {
    const [carts, setCarts] = useState([]);
    const [buyCart, setBuyCart] = useState([]);

    useEffect(() => {
        fetch('/bottle.json')
        .then(res => res.json())
        .then(data => { 
            setCarts(data);
            let storedBuyCart = localStorage.getItem('buyCart');
            if(storedBuyCart) {
                let cartCurrent = JSON.parse(storedBuyCart)[0];
                setBuyCart(cartCurrent);                
                data.forEach(c => {
                    let foundCart = cartCurrent.find(bc => bc.id == c.id);
                    if(foundCart) {
                        c.stock = c.stock - foundCart.quantity;
                    }
                });
            }
        })
        .catch(error => {
            console.error('Error fetching carts:', error);
        });
    }, []);

    const handleaddToCart = (cart) => {
        carts.forEach(c => {
            if(c.id === cart.id) {
                if(c.stock > 0) {
                    c.stock = c.stock - 1;
                }
            }
        });
        setCarts([...carts]);

        let existingCart = buyCart.find(c => c.id === cart.id);
        if(existingCart) {
            existingCart.quantity = (existingCart.quantity || 1) + 1;
        } else {
            cart.quantity = 1;
            buyCart.push(cart);
        }
        setBuyCart([...buyCart]);
        localStorage.setItem('buyCart', JSON.stringify([buyCart]));
    };

    const total = carts.length;
    const buyCartTotal = buyCart.length;

    if(total === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{margin: '20px'}}>
            <h2>Total Products: {total}</h2>
            <h2>Buy Cart Total: {buyCartTotal}</h2>
            <div className="carts"> 
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart} addToCart={handleaddToCart} />)
                }
            </div>
        </div>
    );
};

export default Carts;