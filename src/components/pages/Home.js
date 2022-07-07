import styled from 'styled-components';
import {c} from '../common/styledVariables';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartContainer from '../common/CartContainer';
import ImagesNav from '../common/ImagesNav';
import Intro from '../common/Intro';

const StyledHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 0;

  @media ${c.media_desctop} {
    justify-content: space-around;
  }
`

export const Home = () => {
  const navigate = useNavigate();
  const cart = useSelector(state => state.copterReducer.cart);
  const imagesList = useSelector(state => state.copterReducer.imagesList);

  return (
    <StyledHome>
      <ImagesNav imagesList={imagesList} />
      <Intro imagesList={imagesList} />
      <CartContainer
        onClick={() => cart > 0 && navigate('/cart')}
        count={cart}
      />
    </StyledHome>
  )
}

export default Home;