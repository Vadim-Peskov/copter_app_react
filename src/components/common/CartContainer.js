import styled from "styled-components";
import {c} from './styledVariables';
import {RiShoppingCartLine as CartIco} from 'react-icons/ri';

const StyledCartContainer = styled.div`
  display: none;
  align-self: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100px;
  cursor: pointer;

  @media ${c.media_desctop} {
    display: flex;
  }

  .cartValue {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 0 0 10px 0;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    background-color: ${c.clr_additional};
    border-radius: 60px;

    svg {
      width: 24px;
      height: 24px;
      color: #ffffff;
    }
  }

  p {
    margin: 0 auto;
    font-weight: 500;
    text-align: center;
    user-select: none;
  }
`

export const CartContainer = ({count, ...props}) => {
  return (
    <StyledCartContainer {...props}>
      <div className="cartValue">
        {count > 0 ? count : <CartIco />}
      </div>
      <p>
        {count > 0 ? 'Корзина' : 'Корзина пуста'}
      </p>
    </StyledCartContainer>
  )
}

export default CartContainer;