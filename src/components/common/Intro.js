import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {c} from '../common/styledVariables';
import {setCart} from '../../store/copterSlice';
import Button from '../ui/Button';

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  

  @media ${c.media_desctop} {
    width: 600px;
  }

  h1 {
    margin: 0 0 40px 0;
    font-size: 20px;
    line-height: 1;

    @media ${c.media_tablet} {
      font-size: 32px;
    }
  }

  .mainImgContainer {
    position: relative;
    width: 100%;
    margin: 0 0 50px 0;
    padding: 0 0 58% 0;
    border-radius: 3px;
    user-select: none;

    @media ${c.media_desctop} {
      width: 600px;
      height: 376px;
      padding: 0;
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid ${c.clr_additional};
      border-radius: 3px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .buttonsWrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 0 20px 0;

    @media ${c.media_tablet} {
      margin: 0 0 30px 0;
    }

    @media ${c.media_desctop} {
      margin: 0;
    }
  }
`

export const Intro = ({imagesList}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.copterReducer.cart);

  const addToCart = () => {
    if (cart === 0) {
      localStorage.setItem('cart', 1);
      dispatch(setCart());
    }
  };

  return (
    <StyledIntro>
      <h1>Квадрокоптер DJI AIR 2S</h1>
      <div className='mainImgContainer'>
        <img src={imagesList.find(i => i.active && i.img).img} />
      </div>
      <div className="buttonsWrap">
        <Button
          onClick={addToCart}
          text={cart > 0 ? 'Перейти в корзину' : 'Добавить в корзину'}
          to={cart > 0 && '/cart'}
        />
        <Button to='/characteristics' text='Характеристики' second />
      </div>
    </StyledIntro>
  )
}

export default Intro;