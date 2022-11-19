import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Basket.css';
import { PlusMinusBtn } from './JioButton';

const Basket = ({ cartDetails , visible=true }) => {
  const cards = cartDetails.products.map((product) => {
    return (
      <div key={uuidv4()} className='cart-cards'>
        <div>
          <img src={product.item_img_url} alt='pr-i' />
        </div>
        <div>
          <section style={{ fontFamily: 'jioMedium', fontSize: '16px' }}>
            <p>{product.item_name}</p>
          </section>
          <section>
            <p>
              <span style={{ fontFamily: 'jioMedium', fontSize: '18px' }}>
                &#8377; {product.item_final_price}
              </span>
              <span>
                {product.discount && (
                  <span className='mrp'>
                    MRP:{' '}
                    {
                      <span style={{ textDecoration: 'line-through' }}>
                        &#8377; {product.item_price}
                      </span>
                    }{' '}
                  </span>
                )}
              </span>
            </p>
          </section>
          {visible && <section style={{ textAlig: 'right' }}>
            <PlusMinusBtn product={product} />
          </section>}
        </div>
      </div>
    );
  });

  return (
    <div className='cart-item-section'>
      <div className='basket-title'>
        <section>{`Groceries Basket (${cartDetails.totalItems} items) `}</section>
        <section>₹{cartDetails.bill}</section>
      </div>
      {cards}
    </div>
  );
};

export default Basket;
