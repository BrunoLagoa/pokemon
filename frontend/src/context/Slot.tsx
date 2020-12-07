import React, { createContext, useContext, useState } from 'react';

interface ISlotProvider {
  children: React.ReactNode
}

interface ISlotState {
  [slot: string]: string;
}

interface ContextProps {
  slot: ISlotState;
  setSlot: Function;
}

// @ts-ignore
const SlotContext = createContext();

export default function SlotProvider({ children }: ISlotProvider) {
  const [slot, setSlot] = useState([]);

  return (
    <SlotContext.Provider value={{ slot, setSlot }}>
      {children}
    </SlotContext.Provider>
  );
}

export function useSlot() {
  const context = useContext(SlotContext);
  if (!context) throw new Error('useSlot must be used within a SlotProvider');
  // @ts-ignore
  const { slot, setSlot } = context;

  return { slot, setSlot };
}
