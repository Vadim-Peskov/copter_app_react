import styled from 'styled-components';
import {c} from '../common/styledVariables';
import { useDispatch } from 'react-redux';
import {setImageList} from '../../store/copterSlice';
import {IoMdArrowDropup as TopIco, IoMdArrowDropdown as BottomIco} from 'react-icons/io';
import NavButton from '../ui/NavButton';

const StyledImagesNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  flex-basis: 100%;
  gap: 10px;
  width: 100px;
  order: 2;

  @media ${c.media_tablet} {
    gap: 30px;
  }
  
  @media ${c.media_desctop} {
    flex-basis: auto;
    flex-direction: column;
    gap: 40px;
    order: 0;
  }



  .imagesWrap {
    display: flex;
    align-items: center;
    gap: 8px;

    @media ${c.media_tablet} {
      gap: 12px;
    }

    @media ${c.media_desctop} {
      flex-direction: column;
      gap: 20px;
    }

    .imgContainer {
      position: relative;
      width: 50px;
      height: 50px;
      background-color: #ffffff;
      border-radius: 3px;
      box-shadow: 0 0 16px ${c.clr_shadow};
      cursor: pointer;

      @media ${c.media_tablet} {
        width: 70px;
        height: 70px;
      }

      @media ${c.media_desctop} {
        width: 100px;
        height: 100px;
      }

      &.active::after {
        opacity: 1;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px solid ${c.clr_accent};
        border-radius: 3px;
        pointer-events: none;
        opacity: 0;
        transition: 0.2s;
      }

      &:hover::after {
        opacity: 1;
        transition: 0.2s;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }

`

export const ImagesNav = ({imagesList}) => {
  const dispatch = useDispatch();

  const switchButton = (direction) => {
    const arr = JSON.parse(JSON.stringify(imagesList));
    const activeItem = arr.find(i => i.active);
    arr[activeItem.id - 1].active = false;
    
    if (direction === 'top') {
      if (activeItem.id === 1) arr[arr.length-1].active = true;
      else arr[activeItem.id-2].active = true;
    }
    if (direction === 'bottom') {
      if (activeItem.id === arr[arr.length-1].id) arr[0].active = true;
      else arr[activeItem.id].active = true;
    }
    dispatch(setImageList(arr));
  }

  const clickHandler = (id) => {
    const arr = JSON.parse(JSON.stringify(imagesList));
    arr.forEach(i => {
      if (i.id === id) i.active = true;
      else i.active = false;
    })
    dispatch(setImageList(arr));
  }

  return (
    <StyledImagesNav>
      <NavButton
        onClick={() => switchButton('top')}
        ico={<TopIco />}
      />
      <div className="imagesWrap">
        {imagesList.map(i =>
          <div
            onClick={() => clickHandler(i.id)} 
            className={`imgContainer ${i.active && 'active'}`} key={i.id}
          >
            <img src={i.img} />
          </div>
        )}
      </div>
      <NavButton
        onClick={() => switchButton('bottom')}
        ico={<BottomIco />}
      />
    </StyledImagesNav>
  )
}

export default ImagesNav;