
import { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Toasts from '../components/toasts/toasts';

export interface ToastMessage {
    id: string;
    title?: string;
    text?: string;
    type: 'info' | 'success' | 'error';
    automaticClose?: boolean;
    automaticCloseInterval?: number;
}

interface ToastContextData {
    show(message: Omit<ToastMessage, 'id'>): void;
    showSuccess(message: Omit<ToastMessage, 'id' | 'type'>): void;
    showError(message: Omit<ToastMessage, 'id' | 'type'>): void;
    showInfo(message: Omit<ToastMessage, 'id' | 'type'>): void;
    close(id: string): void;
}

const DEFAULT_CLOSE_INTERVAL = 3000;

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
    const [messages, setMessages] = useState<ToastMessage[]>([]);

    const close = useCallback((id: string): void => {
        setMessages((oldMessages) => oldMessages.filter(message => message.id !== id));
    }, []);

    const show = useCallback((message: Omit<ToastMessage, 'id'>): void => {
        const id = uuid();
        setMessages((oldMessages) => [...oldMessages, { id, ...message }]);

        if (message.automaticClose || message.automaticClose === undefined) {
            setTimeout(() => close(id), DEFAULT_CLOSE_INTERVAL);
        }
    }, [close]);

    const showSuccess = useCallback((message: Omit<ToastMessage, 'id'>): void => {
        show({ title: 'Success', ...message, type: 'success' })
    }, [show]);

    const showError = useCallback((message: Omit<ToastMessage, 'id'>): void => {
        show({ title: 'Error', ...message, type: 'error' })
    }, [show]);

    const showInfo = useCallback((message: Omit<ToastMessage, 'id'>): void => {
        show({ title: 'Info', ...message, type: 'info' })
    }, [show]);

    return (
        <ToastContext.Provider value={{ show, close, showSuccess, showError, showInfo }}>
            {children}
            <Toasts messages={messages} />
        </ToastContext.Provider>
    );
}

export function useToast(): ToastContextData {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within an ToastProvider');
    }
    return context;
}
