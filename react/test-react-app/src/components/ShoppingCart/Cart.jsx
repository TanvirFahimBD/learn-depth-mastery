const Cart = ({ cart, addToCart }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <img src={cart.image} alt={`${cart.name}`} width="100" height="60" />
            <h3>{cart.name}</h3>
            <p>Price: ${cart.price.toFixed(2)}</p>
            <p>Size: {cart.size}</p>
            <p>Color: {cart.color}</p>
            <p>Stock: {cart.stock}</p>

           <button disabled={cart.stock <= 0} onClick={() => addToCart(cart)}>Add to Cart</button>

            {cart.stock == 0 && <span style={{ color: 'green', marginLeft: '10px' }}> 
                <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none">
                    <circle cx="12" cy="12" r="10" fill="#22c55e"/>
                    <path d="M7 12l3 3 7-7"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>  Out of Stock  </span>
            } 
        </div>
    );
};

export default Cart;