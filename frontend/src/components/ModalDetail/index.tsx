import React, { useState, useEffect, useCallback } from 'react';

import Button from '../Button';
import { useSlot } from '../../context/Slot';

import closeImg from '../../assets/images/close.png';

import * as S from './styled';

const ModalDetail = ({ data }: any) => {
  const { slot, setSlot } = useSlot();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setIsOpen(true);
    }
  }, [data]);

  const handleRemoveItem = useCallback(
    async (id) => {
      setSlot(slot.filter((item: { id: Number; }) => item.id !== id));
      setIsOpen(false);
    },
    [setSlot, slot]
  );

  return (
    <>
      {isOpen && (
        <S.ModalWrapper>
          <S.Modal>
            <S.Close>
              <Button icon={closeImg} onClick={() => setIsOpen(false)} />
            </S.Close>
            <S.CleanPokemon>
              <Button
                text="Liberar Pokemon"
                onClick={() => handleRemoveItem(data.id)}
              />
            </S.CleanPokemon>
            <S.ModalContent>
              <img
                src={data.sprites.other['official-artwork'].front_default}
                alt={data.name}
              />
              <div>
                <h1>{data.name}</h1>
                <div>
                  <div>
                    <h2>Hp</h2>
                    <span>45/45</span>
                  </div>
                  <div>
                    <h2>Atura</h2>
                    <span>{data.height} m</span>
                  </div>
                  <div>
                    <h2>Peso</h2>
                    <span>{data.weight} kg</span>
                  </div>
                </div>
                <S.SessionContent>
                  <S.Title>
                    <span>Tipo</span>
                  </S.Title>
                  <ul>
                    <li>PLANTA</li>
                    <li>VENENO</li>
                  </ul>
                </S.SessionContent>
                <S.SessionContent>
                  <S.Title>
                    <span>Habilidades</span>
                  </S.Title>
                  <ul>
                    <li>Overgrow</li>
                    <li>Clorofila</li>
                  </ul>
                </S.SessionContent>
              </div>
            </S.ModalContent>
          </S.Modal>
        </S.ModalWrapper>
      )}
    </>
  );
};

export default ModalDetail;
