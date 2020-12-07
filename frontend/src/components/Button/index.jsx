import React from 'react';

import * as S from './styled';

const Button = ({ text, icon, onClick }) => (
  <S.ButtonWrapper className={`${icon ? 'icon' : ''}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
