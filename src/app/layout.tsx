import React from 'react';
import '../styles/main.css';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <html>
            <head></head>
            <body>{children}</body>
        </html>
    );
}
