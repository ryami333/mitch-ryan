import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import envelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import linkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';

function Panel() {
    return (
        <div className="panel">
            <div className="panel__inner">
                <h1>Mitch Ryan</h1>
                <div className="panel__copy">
                    <p>
                        {`New Zealand based full-stack web developer, specialising in interactive media and particularly interested in projects of social importance.`}
                    </p>
                    <p>
                        {`Mitch has experience working with major domestic and international organisations, and his work has been recognised by such reputable institutions as “W3”, “Awwwards”, “The FWA” and “The Webby Awards”,`}
                    </p>
                </div>
                <div className="panel__links">
                    <a
                        href="https://www.linkedin.com/in/mitch-ryan-2a0b70127/"
                        className="panel__link panel__link--linkedin"
                        target="_BLANK"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={envelope} />
                    </a>
                    <a
                        href="mailto:ohai@mitch-ryan.com"
                        className="panel__link panel__link--email"
                    >
                        <FontAwesomeIcon icon={linkedin} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Panel;
