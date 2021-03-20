
import { ToastProvider } from '../../hooks/toast';
import { ApplicationLayoutContainer } from './application-layout.styled';
import GobalStyle from './../../styles/global.styled';

const ApplicationLayout: React.FC = ({ children }) => {
    return (
        <>
            <ApplicationLayoutContainer>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </ApplicationLayoutContainer>
            <GobalStyle />
        </>
    );
};


export default ApplicationLayout;