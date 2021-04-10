
import React from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useTransition } from 'react-spring';
import { useMenu } from '../../../hooks/menu';
import { HideText } from '../../hide-text/hide-text.styled';
import { CloseMenu, MenuContainer, MenuHeader, MenuItem, MenuList } from './menu.styled';

export const Menu: React.FC = () => {
    const { opened, close } = useMenu();
    const openAnimationTransition = useTransition(opened, null, {
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        leave: {
            opacity: 0
        },
        config: {
            duration: 150
        },
    });

    return (
        <>
            { openAnimationTransition.map(({ item, props, key }) => item && (
                <MenuContainer key={key} style={{ ...props }}>
                    <MenuHeader>
                        <CloseMenu onClick={close}>
                            <RiCloseFill />
                            <HideText>Close Menu</HideText>
                        </CloseMenu>
                    </MenuHeader>
                    <MenuList>
                        <MenuItem>
                            <Link to='/' onClick={close}>Home</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/lamp' onClick={close}>New Lamp</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/config-network' onClick={close}>Config Network</Link>
                        </MenuItem>
                    </MenuList>
                </MenuContainer>
            ))}
        </>
    )
}
