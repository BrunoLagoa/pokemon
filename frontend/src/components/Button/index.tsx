import React from 'react';

import * as S from './styled';

interface IButton {
  text?: string;
  icon?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, icon, onClick }: IButton) => (
  <S.ButtonWrapper className={`${icon ? 'icon' : ''}`} onClick={onClick}>
    {icon ? <S.Icon src={icon} /> : <S.Text>{text}</S.Text>}
  </S.ButtonWrapper>
);

export default Button;
