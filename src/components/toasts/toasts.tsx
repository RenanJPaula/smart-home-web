import { FiAlertCircle, FiCheck, FiInfo, FiXCircle } from "react-icons/fi";
import { ToastMessage, useToast } from "../../hooks/toast";
import { CloseToast, Message, Title, Toast, ToastContent, ToastsContainer } from "./toasts.styled";

interface ToastsProps {
    messages: ToastMessage[];
}

const icons = {
    info: <FiInfo />,
    success: <FiCheck />,
    error: <FiAlertCircle />,
}

const Toasts: React.FC<ToastsProps> = ({ messages }) => {
    const { close } = useToast();

    return (
        <ToastsContainer>
            {messages.map(message => (
                <Toast key={message.id} type={message.type}>
                    { icons[message.type]}

                    <ToastContent>
                        <Title>{message.title}</Title>
                        {!!message.text && (
                            <Message>{message.text}</Message>
                        )}
                    </ToastContent>

                    <CloseToast onClick={() => close(message.id)}>
                        <FiXCircle />
                    </CloseToast>
                </Toast>
            ))}
        </ToastsContainer>
    );
};

export default Toasts;
