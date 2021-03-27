import { DevicesProvider } from "../hooks/devices";
import { ToastProvider } from "../hooks/toast";
import { MenuProvider } from '../hooks/menu';

const GlobalProvider: React.FC = ({ children }) => {
    return (
        <>
            <MenuProvider>
                <ToastProvider>
                    <DevicesProvider>
                        {children}
                    </DevicesProvider>
                </ToastProvider>
            </MenuProvider>
        </>
    );
};

export default GlobalProvider;