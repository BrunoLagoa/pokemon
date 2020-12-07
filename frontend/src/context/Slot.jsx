import React, { createContext, useContext, useState } from 'react';

const SlotContext = createContext();

export default function SlotProvider({ children }) {
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
  const { slot, setSlot } = context;

  return { slot, setSlot };
}
