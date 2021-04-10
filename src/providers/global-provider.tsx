import { DevicesProvider } from '../hooks/devices';
import { HeaderProvider } from '../hooks/header';
import { MenuProvider } from '../hooks/menu';
import { ToastProvider } from '../hooks/toast';

const GlobalProvider: React.FC = ({ children }) => {
    return (
        <>
            <HeaderProvider>
                <MenuProvider>
                    <ToastProvider>
                        <DevicesProvider>
                            {children}
                        </DevicesProvider>
                    </ToastProvider>
                </MenuProvider>
            </HeaderProvider>
        </>
    );
};

export default GlobalProvider;