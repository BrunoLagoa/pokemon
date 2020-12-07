import React from 'react';

import GlobalStyled from './assets/styles/globalStyled';

import SlotProvider from './context/Slot';

import Routes from './routes';

function App() {
  return (
    <SlotProvider>
      <GlobalStyled />
      <Routes />
    </SlotProvider>
  );
}

export default App;
