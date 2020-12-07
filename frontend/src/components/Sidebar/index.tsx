import React, { useCallback, useState } from 'react';

import ModalDetail from '../ModalDetail';

import iconPlus from '../../assets/images/plus.png';
import Button from '../Button';
import { useSlot } from '../../context/Slot';

import * as S from './styled';

interface IItem {
  id?: string | number | null;
  sprites:
  {
    other:
    {
      [x: string]:
      { front_default?: string; };
    };
  };
  name?: string;
}

const Sidebar = () => {
  const { slot } = useSlot();
  const [data, setData] = useState({});

  const handleDetails = useCallback(
    async (id) => {
      setData(slot.filter((item: { id: any; }) => item.id === id)[0]);
    },
    [slot]
  );

  return (
    <>
      <ModalDetail data={data} />
      <S.SideBarWrapper>
        <S.SideBarList>
          {slot.map((item: IItem) => (
            <S.SideBarItem key={item.id} onClick={() => handleDetails(item.id)}>
              <img
                src={item.sprites.other['official-artwork'].front_default}
                alt={item.name}
              />
            </S.SideBarItem>
          ))}
        </S.SideBarList>

        <Button icon={iconPlus} onClick={() => {}}/>
      </S.SideBarWrapper>
    </>
  );
};

export default Sidebar;
