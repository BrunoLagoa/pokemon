/* eslint-disable no-nested-ternary */
import styled, { keyframes } from 'styled-components';

import ashFrontImg from '../../assets/images/ashFront.png';

import searchTooltipImg from '../../assets/images/searchTooltip.png';
import searchingTooltipImg from '../../assets/images/searchingTooltip.png';
import tooltipErrorImg from '../../assets/images/tooltipError.png';
import img from '../../assets/images/pageBackground.png';

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(30%);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  :hover {
    & img:first-child {
      opacity: 1;
      animation: 0.5s ${fadeIn} ease both;
    }
  }
`;

interface IProps {
  tooltip: string;
  isSlotFull: boolean;
}

export const Search = styled.img.attrs<IProps>(props => ({
  src: `${
    props.tooltip === 'search'
      ? searchTooltipImg
      : props.isSlotFull
      ? tooltipErrorImg
      : searchingTooltipImg
  }`,
}))<IProps>`
  margin-bottom: 1rem;
  opacity: 0;
  /* animation: 0.5s ${fadeOut} ease both; */
`;

export const AshFront = styled.img.attrs({
  src: `${ashFrontImg}`,
})``;
