
import { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { useTransition } from 'react-spring';
import ApplicationRoute from '../../pages/application-route';
import GobalStyle from './../../styles/global.styled';
import { AnimatedTransictionContainer, ApplicationLayoutContainer, MainContent } from './application-layout.styled';
import { Header } from './header/header';

const transitonsAnimationsDef = {
    from: { opacity: 0, transform: 'translate(100%, 0)' },
    enter: { opacity: 1, transform: 'translate(0, 0)' },
    leave: { opacity: 0, transform: 'translate(-50%, 0)' }
};

const ApplicationLayout: React.FC = () => {
    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, transitonsAnimationsDef);
    return (
        <>
            <ApplicationLayoutContainer>
                <Header />
                <MainContent>
                    {transitions.map(({ item, props, key }) => (
                        <AnimatedTransictionContainer key={key} style={props}>
                            <ApplicationRoute location={item} />
                        </AnimatedTransictionContainer>
                    ))}
                </MainContent>
            </ApplicationLayoutContainer>
            <GobalStyle />
        </>
    );
};


export default ApplicationLayout;