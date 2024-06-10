import React from 'react';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Panel from './Panel';
import CSSVariables from './CSSVariables';
import FontStyles from './FontStyles';
import GenericStyles from './GenericStyles';
import Triangle from './Triangle';
import { Provider as WindowProvider, useWindow } from './WindowContainer';
import styles from './App.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function App(): React.ReactElement {
    const windowState = useWindow();

    return (
        <div className={cx('container')}>
            <Triangle {...windowState} />
            <Panel />
        </div>
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
