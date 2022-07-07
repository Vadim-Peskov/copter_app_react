import styled from 'styled-components';
import {c} from '../common/styledVariables';
import { useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setCart, removeCart } from '../../store/copterSlice';
import {AiOutlineMinus as MinusIco, AiOutlinePlus as PlusIco} from 'react-icons/ai'
import Button from "../ui/Button";
import NavButton from '../ui/NavButton';

const StyledCart = styled.div`
  padding: 40px 0 0 0;

  h2 {
    margin: 0 0 30px 0;
    font-size: 24px;
    text-transform: uppercase;
  }

  .goods {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 40px 0;
    padding: 20px 0;
    border-top: 1px solid ${c.clr_additional};
    border-bottom: 1px solid ${c.clr_additional};

    .imgContainer {
      position: relative;
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      background-color: #ffffff;
      border-radius: 3px;
      box-shadow: 0 0 16px ${c.clr_shadow};

      @media ${c.media_tablet} {
        width: 160px;
        height: 140px;
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    h3 {
      margin: 0 10px;
      font-size: 14px;

      @media ${c.media_tablet} {
        font-size: 20px;
      }
    }

    .buttonsWrap {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 0 10px;

      @media ${c.media_tablet} {
        flex-direction: row;
      }

      button {
        width: 34px;
        height: 34px;

        @media ${c.media_tablet} {
          width: 44px;
          height: 44px;
        }

        svg {
          transform: none;
        }
      }
    }

    p{
      min-width: 110px;
      text-align: right;
    }
  }

  .noGoods {
    margin: 0 0 20px 0;
    font-size: 18px;
  }

`

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.copterReducer.cart);
  const imagesList = useSelector(state => state.copterReducer.imagesList);
  const price = useSelector(state => state.copterReducer.price);

  const totalPrice = useMemo(() => cart * price, [cart, price]);
  const addGoods = () => {
    localStorage.setItem('cart', cart + 1)
    dispatch(setCart())
  };
  const removeGoods = () => {
    if (Number(localStorage.getItem('cart')) === 1) {
      localStorage.removeItem('cart');
    }
    else if (Number(localStorage.getItem('cart')) > 0) {
      localStorage.setItem('cart', cart - 1);
    }
    dispatch(removeCart())
  };

  return (
    <StyledCart>
      <h2>Корзина</h2>
      {cart > 0
        ? <div className='goods'>
            <div className='imgContainer'>
              <img src={imagesList[2].img} alt="copter" />
            </div>
            <h3>DJI AIR 2S</h3>
            <div className='buttonsWrap'>
              <NavButton
                onClick={removeGoods}
                ico={<MinusIco />}
              />
              <NavButton
                onClick={addGoods}
                ico={<PlusIco />}
              />
            </div>
            <p>{totalPrice} руб</p>
          </div>
        : <div className='noGoods'>Товаров нет</div>
      }
      <Button onClick={() => navigate(-1)} text='Назад' />
    </StyledCart>
  )
}

export default Cart;