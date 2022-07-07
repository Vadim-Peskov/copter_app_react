import styled, {css} from 'styled-components';
import { c } from "../common/styledVariables";
import { Link } from 'react-router-dom';

const AppButton = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  padding: 20px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  background-color: ${c.clr_accent};
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  ${props => props.second && css`
    background-color: ${c.clr_second};
  `}

  &:hover {
    background-color: ${c.clr_accent_hover};
  }
`

export const Button = ({text='Button', to=false, ...props}) => {
  return (
    <>
      {to
        ? <Link to={to} style={{textDecoration: 'none'}}>
            <AppButton {...props}>
              <span className='text'>{text}</span>
            </AppButton>
          </Link>
        : <AppButton {...props}>
            <span className='text'>{text}</span>
          </AppButton>
      }
    </>
  )
}

export default Button;