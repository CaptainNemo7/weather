import styled, { css } from 'styled-components';

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;

  ${props => props.dayList && css`
    flex-direction: column;
    align-items: center;
  `}

  ${props => props.main && css`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}


`;

export default Container;