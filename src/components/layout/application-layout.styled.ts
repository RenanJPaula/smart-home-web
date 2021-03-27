
import styled from 'styled-components';
import { animated } from 'react-spring';

export const ApplicationLayoutContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 425px;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    overflow-x: hidden;
`;

export const MainContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const AnimatedTransictionContainer = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
`;
