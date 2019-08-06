import React from 'react';

interface TriangleProps {
    innerHeight: number;
    innerWidth: number;
}

function getPosition({
    e,
    innerWidth,
    innerHeight,
}: {
    e: MouseEvent;
    innerHeight: number;
    innerWidth: number;
}): number {
    const rx = 1 - e.clientX / innerWidth;
    const ry = e.clientY / innerHeight;
    return rx + ry - 0.5;
}

function Triangle({
    innerWidth,
    innerHeight,
}: TriangleProps): React.ReactElement {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

    React.useLayoutEffect((): (() => void) => {
        const context =
            canvasRef.current &&
            canvasRef.current.getContext('2d', { alpha: false });

        const handleMove = (e?: MouseEvent): void => {
            const position = e
                ? getPosition({ e, innerHeight, innerWidth })
                : 0.5;

            if (context) {
                // Draw BG
                context.fillStyle = '#DDD';
                context.fillRect(0, 0, innerWidth, innerHeight);

                // Draw Triangle
                context.beginPath();
                context.fillStyle = '#333';
                context.moveTo(0, (position - 0.5) * innerHeight);
                context.lineTo(innerWidth, innerHeight * (position + 0.5));
                context.lineTo(innerWidth, 0);
                context.lineTo(0, 0);
                context.lineTo(0, (position - 0.5) * innerHeight);
                context.fill();
            }
        };

        window.addEventListener('mousemove', handleMove);
        handleMove();

        return (): void => window.removeEventListener('mousemove', handleMove);
    }, [innerWidth, innerHeight]);

    return (
        <canvas
            width={innerWidth}
            height={innerHeight}
            className="triangle"
            ref={canvasRef}
        />
    );
}

export default React.memo(Triangle);
