import React from 'react'
import { useStateValue } from '../StateProvider'
import '../style/Product.css'
import { CurrencyFormat } from '../reducer';

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

    return (
        <div className='product'>
            <div className="product-info">
                <p>{title}</p>
                <p className='product-price'>
                    <strong>{CurrencyFormat(price)}</strong>    
                </p> 
                <div className="product-rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (  
                        <p key={i}>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} atl='product' />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product