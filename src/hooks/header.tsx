
import { createContext, useContext, useState } from 'react';

interface HeaderContextData {
    title: string | null;
    setTitle(title: string): void;
}

const HeaderContext = createContext<HeaderContextData>({} as HeaderContextData);

export const HeaderProvider: React.FC = ({ children }) => {
    const [title, setTitle] = useState<string | null>(null);

    return (
        <HeaderContext.Provider value={{ title, setTitle }}>
            {children}
        </HeaderContext.Provider>
    );
}

export function useHeader(): HeaderContextData {
    const context = useContext(HeaderContext);
    if (!context) {
        throw new Error('useHeader must be used within an HeaderProvider');
    }
    return context;
}
