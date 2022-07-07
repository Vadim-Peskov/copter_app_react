import styled from "styled-components";
import {c} from './styledVariables';

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 70vh;
  margin: 0 auto;
  padding: 0 20px;
  
  @media ${c.media_tablet} {
    box-shadow: 0 0 16px ${c.clr_shadow};
  }
`

export const Container = ({children}) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;