import React from 'react';
import { StyledMenu } from './Menu.styled';

interface MenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/">
          <span role="img" aria-label="About me">
                    🧔
          </span>
                About Me
        </a>
        <a href="/">
          <span role="img" aria-label="contact">
                    📩
          </span>
                Contact
        </a>
      </StyledMenu>
    );
};

export default Menu;
