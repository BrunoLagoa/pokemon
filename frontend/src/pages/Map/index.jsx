import React, { useState } from 'react';

import Sidebar from '../../components/Sidebar';
import ModalDetailCapture from '../../components/ModalDetailCapture';

import { useSlot } from '../../context/Slot';

import api from '../../services/api';

import * as S from './styled';

const MapPage = () => {
  const { slot } = useSlot();

  const [tooltip, setTooltip] = useState('search');
  const [isSlotFull, setIsSlotFull] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const handleModalDetailCapture = async () => {
    setTooltip('searching');

    if (slot.length === 6) {
      setIsSlotFull(true);
      return;
    }

    const number = 1 + Math.floor((807 - 1) * Math.random());
    await api.get(`${number}`).then((response) => {
      setData({ ...response.data, isCustom: false });
    });

    setTooltip('search');

    setIsModalOpen(true);
  };

  return (
    <S.MapWrapper className="map">
      <Sidebar />
      <ModalDetailCapture isModalOpen={isModalOpen} data={data} />
      <S.Content>
        <S.Search tootip={tooltip} isSlotFull={isSlotFull} />
        <S.AshFront onClick={handleModalDetailCapture} />
      </S.Content>
    </S.MapWrapper>
  );
};

export default MapPage;
