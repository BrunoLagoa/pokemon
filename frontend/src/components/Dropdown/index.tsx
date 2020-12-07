import React from 'react';

import chevron from '../../assets/images/chevronDownBlack.png';

import * as S from './styled';

interface IOptions {
  value: string;
  text: string;
}

interface IDropdownPage {
  label: string;
  options: IOptions[];
}

const DropdownPage = ({ label, options }: IDropdownPage) => (
  <S.DropdownWrapper>
    {label && <S.Label>{label}</S.Label>}

    <S.DropdownContent>
      <S.Select>
        <S.DropdownOption value="">Selecione o(s) tipo(s)</S.DropdownOption>
        {options &&
          options.map((option, index) => (
            <S.DropdownOption key={String(index)} value={option.value}>
              {option.text}
            </S.DropdownOption>
          ))}
      </S.Select>
      <S.DropdownIcon src={chevron} alt="Chevron" />
    </S.DropdownContent>
  </S.DropdownWrapper>
);

export default DropdownPage;
