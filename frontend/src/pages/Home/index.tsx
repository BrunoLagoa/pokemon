import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import * as S from './styled';

const HomePage = () => {
  const history = useHistory();

  return (
    <S.HomeWrapper>
      <S.Logo />
      <Button text="Start" onClick={() => history.push('/map')} />
    </S.HomeWrapper>
  );
};

export default HomePage;
