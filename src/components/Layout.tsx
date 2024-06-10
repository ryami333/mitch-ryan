import React from 'react';
import { Helmet } from 'react-helmet';

export default function Layout({
    children,
}: {
    children: React.ReactNode,
}): React.ReactElement {
    return (
        <React.Fragment>
            <Helmet>
                <title>Mitch Ryan | Kiwi Developer</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="charset" content="UTF-8" />
            </Helmet>
            {children}
        </React.Fragment>
    );
}
