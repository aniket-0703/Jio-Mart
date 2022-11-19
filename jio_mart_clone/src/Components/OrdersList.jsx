import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Basket.css';

const OrdersList = ({ order , visible=true }) => {
  // console.log(order)
  const keys = Object.getOwnPropertyNames(order)
  // console.log(keys)
  const cards = keys.map((product) => {
    const { item_img_url, item_name, item_final_price, item_price, discount} = order[product].product
    return (
      <div key={uuidv4()} className='cart-cards'>
        <div>
          <img src={item_img_url} alt='pr-i' />
        </div>
        <div>
          <section style={{ fontFamily: 'jioMedium', fontSize: '16px' }}>
            <p>{item_name}</p>
          </section>
          <section>
            <p>
              <span style={{ fontFamily: 'jioMedium', fontSize: '18px' }}>
                &#8377; {item_final_price}
              </span>
              <span>
                {discount && (
                  <span className='mrp'>
                    MRP:{' '}
                    {
                      <span style={{ textDecoration: 'line-through' }}>
                        &#8377; {item_price}
                      </span>
                    }{' '}
                  </span>
                )}
              </span>
            </p>
          </section>
        </div>
      </div>
    );
  });

  return (
    <div className='cart-item-section' style={{borderRadius: "10px"}}>
      <div className='basket-title'>
        <section>{`Order Id :  ${uuidv4()} `}</section>
      </div>
      {cards}
    </div>
  );
};

export default OrdersList;
