import { FiAlertCircle, FiCheck, FiInfo, FiXCircle } from "react-icons/fi";
import { ToastMessage, useToast } from "../../hooks/toast";
import { CloseToast, Message, Title, Toast, ToastContent, ToastsContainer } from "./toasts.styled";
import { useTransition } from 'react-spring';

interface ToastsProps {
    messages: ToastMessage[];
}

const icons = {
    info: <FiInfo />,
    success: <FiCheck />,
    error: <FiAlertCircle />,
}

const transictionConfig = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
}

const Toasts: React.FC<ToastsProps> = ({ messages }) => {
    const messagesWithTransiction = useTransition(messages, message => message.id, transictionConfig);
    const { close } = useToast();

    return (
        <>
            <ToastsContainer>
                {messagesWithTransiction.map(({ item, key, props }) => (
                    <Toast key={key} type={item.type} style={props}>
                        { icons[item.type]}

                        <ToastContent>
                            <Title>{item.title}</Title>
                            {!!item.text && (
                                <Message>{item.text}</Message>
                            )}
                        </ToastContent>

                        <CloseToast onClick={() => close(item.id)}>
                            <FiXCircle />
                        </CloseToast>
                    </Toast>
                ))}
            </ToastsContainer>
        </>
    );
};

export default Toasts;
