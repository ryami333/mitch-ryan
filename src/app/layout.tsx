import React from 'react';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <html>
            <head>
                <title>Mitch Ryan | Kiwi Developer</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
