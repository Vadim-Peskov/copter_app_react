import styled from 'styled-components';
import { c } from "../common/styledVariables";

const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-family: inherit;
  background-color: transparent;
  outline: none;
  border: 2px solid ${c.clr_additional};
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;

  @media ${c.media_tablet} {
    width: 60px;
    height: 60px;
  }

  &:hover {
    border: 2px solid ${c.clr_accent_hover};

    svg {
      color: ${c.clr_accent_hover};
      transition: 0.2s;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${c.clr_additional};
    transform: rotate(-90deg);
    transition: all 0.2s, rotate 0s;

    @media ${c.media_tablet} {
      width: 60px;
      height: 60px;
    }

    @media ${c.media_desctop} {
      transform: none;
    }
  }
`

export const NavButton = ({ico, ...props}) => {
  return (
    <StyledButton {...props}>
      {ico}
    </StyledButton>
  )
}

export default NavButton;