import { DevicesProvider } from "../hooks/devices";
import { ToastProvider } from "../hooks/toast";

const GlobalProvider: React.FC = ({ children }) => {
    return (
        <>
            <ToastProvider>
                <DevicesProvider>
                    {children}
                </DevicesProvider>
            </ToastProvider>
        </>
    );
};

export default GlobalProvider;