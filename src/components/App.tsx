import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Panel from './Panel';
import CSSVariables from './CSSVariables';
import FontStyles from './FontStyles';
import GenericStyles from './GenericStyles';
import Triangle from './Triangle';
import { Provider as WindowProvider, useWindow } from './WindowContainer';

const Container = styled.div`
    overflow: hidden;
`;

function App(): React.ReactElement {
    const windowState = useWindow();

    return (
        <Container>
            <Triangle {...windowState} />
            <Panel />
        </Container>
    );
}

export default function AppWrapper(): React.ReactElement {
    return (
        <WindowProvider>
            <Reset />
            <CSSVariables />
            <FontStyles />
            <GenericStyles />
            <App />
        </WindowProvider>
    );
}
