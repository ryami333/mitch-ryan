import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: white;
    font-size: 22px;
    mix-blend-mode: exclusion;

    @media (max-width: 420px) {
        font-size: 16px;
    }
`;

const Heading = styled.h1`
    font-weight: 900;
    font-size: 2.66em;
    color: white;
`;

const CopyWrapper = styled.div`
    margin-top: var(--spacing3);
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: var(--spacing2);

    p {
        font-size: 1em;
        line-height: 1.5;
    }

    a {
        font-size: 1em;
        line-height: 1.5;
        color: inherit;
        text-decoration: underline;
    }
`;

const Inner = styled.div`
    width: 100%;
    padding: 0 var(--spacing2);
    max-width: 890px;

    @media (max-width: 420px) {
        max-width: 334px;
    }
`;

const LinksWrapper = styled.div`
    margin-top: var(--spacing3);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    mix-blend-mode: exclusion;
`;

function Panel(): React.ReactElement {
    return (
        <Container>
            <Inner>
                <Heading>Mitch Ryan.</Heading>
                <CopyWrapper className="panel__copy">
                    <p>
                        New Zealand based full-stack web developer, specialising
                        in interactive media and particularly interested in
                        projects of social importance.
                    </p>
                    <p>
                        Mitch has experience working with major domestic and
                        international organisations, and his work has been
                        recognised by such reputable institutions as “W3”,
                        “Awwwards”, “The FWA” and “The Webby Awards”.
                    </p>
                    <div>
                        <a
                            href="https://github.com/ryami333"
                            className="panel__link panel__link--email"
                        >
                            Github
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://github.com/ryami333"
                            className="panel__link panel__link--linkedin"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a
                            href="mailto:ohai@mitch-ryan.com"
                            className="panel__link panel__link--email"
                        >
                            Email
                        </a>
                    </div>
                </CopyWrapper>
            </Inner>
        </Container>
    );
}

export default Panel;
