import styled from 'styled-components';
import {c} from '../common/styledVariables';
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';
import {data} from '../../data';
import Button from "../ui/Button";

const StyledCharacteristics = styled.div`
  padding: 10px 0 40px 0;

  table {
    width: 766px;
    margin: 0 0 40px 0;
    line-height: 1.5;
    border-collapse: collapse;
    overflow-x: scroll;

    @media ${c.media_tablet} {
      width: 100%;
    }

    tr {
      display: flex;
    }
    
    th {
      padding: 30px 20px 30px 0;
    }
    
    td {
      padding: 16px 20px;
    }

    td:first-of-type {
      flex-basis: 40%;
    }

    td:last-of-type {
      flex-basis: 60%;
    }

    .title {
      font-size: 20px;
      text-transform: uppercase;
    }

    .description:nth-child(even) {
      background-color: #e9e9e9;
    }
  }
`

export const Characteristics = () => {
  const navigate = useNavigate();

  return (
    <StyledCharacteristics>
      <table>
        <tbody>
          {data.map(i =>
            i.length < 2
              ? <tr className='title' key={uuid()}>
                  <th colSpan={2}>{i}</th>
                </tr>
              : !Array.isArray(i[1])
                  ? <tr className='description' key={uuid()}>
                      <td>{i[0]}</td>
                      <td>{i[1]}</td>
                    </tr>
                  : <tr className='description' key={uuid()}>
                      <td>{i[0]}</td>
                      <td>
                        {i[1].map(j => <div key={uuid()}>{j}<br/></div>)}
                      </td>
                    </tr>
          )}
        </tbody>
      </table>
      <Button onClick={() => navigate(-1)} text='Назад' />
    </StyledCharacteristics>
  )
}

export default Characteristics;