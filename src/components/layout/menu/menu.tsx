
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useMenu } from '../../../hooks/menu';
import { HideText } from '../../hide-text/hide-text.styled';
import { CloseMenu, MenuContainer, MenuHeader, MenuItem, MenuList } from './menu.styled';

export const Menu: React.FC = () => {
    const { opened, close } = useMenu();

    return (
        <>
            { opened &&
                <MenuContainer>
                    <MenuHeader>
                        <CloseMenu onClick={close}>
                            <RiCloseFill />
                            <HideText>
                                Open Menu
                            </HideText>
                        </CloseMenu>
                    </MenuHeader>
                    <MenuList>
                        <MenuItem>
                            <Link to='/' onClick={close}>Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/lamp' onClick={close}>New Lamp</Link>
                        </MenuItem>
                    </MenuList>
                </MenuContainer>
            }
        </>
    )
}
