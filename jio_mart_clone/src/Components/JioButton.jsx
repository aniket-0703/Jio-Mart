import React from 'react';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import './JioButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from '../Redux/Cart/actions';

export const PlusMinusBtn = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cartItems);
  let quantity = cart[product.id] && cart[product.id].quantity;
  return (
    <div className='plusMinusBtn'>
      <span style={{cursor:"pointer"}}
        onClick={() =>
          dispatch(updateCart({ product, quantity: quantity - 1 }))
        }
      >
        <MinusButton />
      </span>
      <h3 className='order-nums'>{quantity}</h3>
      <span style={{cursor:"pointer"}} onClick={() => dispatch(updateCart({ product, quantity: quantity + 1 }))}>
        <PlusButton size={32} />
      </span>
    </div>
  );
};

export const JioButton = ({ showInfo, myProduct }) => {
  return (
    <div >
      <div className='btnStyle'>
        <span className="btnText">Add to Cart</span> <PlusButton size={25} />
      </div>
    </div>
  );
};
