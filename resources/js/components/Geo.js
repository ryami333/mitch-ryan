import React from 'react';

export default function() {
    return (
        <div className="geo">
            <svg className="geo__svg" viewBox="-10 -10 110 110" preserveAspectRatio="none" vectorEffect="non-scaling-stroke">
                <polygon className="geo__polygon" points="40 0, 100 20, 80 100, 30 90, 0 50" fill="none" stroke="red" />
            </svg>
        </div>
    )
}
