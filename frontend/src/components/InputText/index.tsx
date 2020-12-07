import React from 'react';

import * as S from './styled';

interface IInputText {
  className: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  suffix: string;
}

const InputText = ({ className, label, type, placeholder, name }: IInputText) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.Input type={type} placeholder={placeholder} name={name} />
  </S.InputTextWrapper>
);

export default InputText;
