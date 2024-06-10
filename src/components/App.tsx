import React from 'react';
import styled from 'styled-components';
import Panel from './Panel';
import FontStyles from './FontStyles';
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
            <FontStyles />
            <App />
        </WindowProvider>
    );
}
