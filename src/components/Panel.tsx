import React from 'react';
import classNames from 'classnames/bind';
import styles from './Panel.module.css';

const cx = classNames.bind(styles);

function Panel(): React.ReactElement {
    return (
        <div className={cx('container')}>
            <div className={cx('inner')}>
                <h1 className={cx('heading')}>Mitch Ryan.</h1>
                <div className={cx('copy-wrapper')}>
                    <p>
                        Berlin based full-stack web developer from New Zealand,
                        specialising in interactive media and particularly
                        interested in projects of social importance.
                    </p>
                    <p>
                        Mitch has experience working with major domestic and
                        international organisations, and his work has been
                        recognised by such reputable institutions as “W3”,
                        “Awwwards”, “The FWA” and “The Webby Awards”.
                    </p>
                    <div>
                        <a href="https://github.com/ryami333">Github.</a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/mitch-ryan-dev/">
                            LinkedIn.
                        </a>
                    </div>
                    <div>
                        <a href="mailto:ohai@mitch-ryan.com">Email.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;
