
import React, { useCallback } from 'react';
import { FiMenu } from 'react-icons/fi';
import { useHeader } from '../../../hooks/header';
import { useMenu } from '../../../hooks/menu';
import { HideText } from '../../hide-text/hide-text.styled';
import { Menu } from '../menu/menu';
import { HeaderContainer, OpenMenu, Title } from './header.styled';

export const Header: React.FC = () => {
    const { open: openMenu } = useMenu();
    const { title } = useHeader();

    const handleOpenMenu = useCallback(() => {
        openMenu();
    }, [openMenu]);

    return (
        <HeaderContainer>
            <Title>{title}</Title>
            <Menu />
            <OpenMenu onClick={handleOpenMenu}>
                <FiMenu />
                <HideText>
                    Open Menu
                </HideText>
            </OpenMenu>
        </HeaderContainer>
    )
}
