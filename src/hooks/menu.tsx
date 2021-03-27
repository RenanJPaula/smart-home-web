
import { createContext, useCallback, useContext, useState } from 'react';

interface MenuContextData {
    opened: boolean;
    open(): void;
    close(): void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

export const MenuProvider: React.FC = ({ children }) => {
    const [opened, setOpened] = useState<boolean>(false);

    const open = useCallback((): void => {
        setOpened(true);
    }, []);

    const close = useCallback((): void => {
        setOpened(false);
    }, []);

    return (
        <MenuContext.Provider value={{ opened, open, close }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu(): MenuContextData {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within an MenuProvider');
    }
    return context;
}
