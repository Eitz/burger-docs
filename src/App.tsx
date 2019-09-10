import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { useOnClickOutside } from './hooks';
import { Burger, Menu } from './components';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef() as React.MutableRefObject<HTMLInputElement>;

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <div>
            <h1>Welcome! Enjoy every Burger from our awesome store 😄</h1>
            <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
          </div>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </>
      </ThemeProvider>
  );
}

export default App;
