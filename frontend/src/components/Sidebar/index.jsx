import React, { useCallback, useState } from 'react';

import ModalDetail from '../ModalDetail';

import iconPlus from '../../assets/images/plus.png';
import Button from '../Button';
import { useSlot } from '../../context/Slot';

import * as S from './styled';

const Sidebar = () => {
  const { slot } = useSlot();
  const [data, setData] = useState({});

  const handleDetails = useCallback(
    async (id) => {
      setData(slot.filter((item) => item.id === id)[0]);
    },
    [slot]
  );

  return (
    <>
      <ModalDetail data={data} />
      <S.SideBarWrapper>
        <S.SideBarList>
          {slot.map((item) => (
            <S.SideBarItem key={item.id} onClick={() => handleDetails(item.id)}>
              <img
                src={item.sprites.other['official-artwork'].front_default}
                alt={item.name}
              />
            </S.SideBarItem>
          ))}
        </S.SideBarList>

        <Button icon={iconPlus} />
      </S.SideBarWrapper>
    </>
  );
};

export default Sidebar;
