import React from "react";
import classNames from "classnames/bind";
import styles from "./Triangle.module.css";

const cx = classNames.bind(styles);

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
  const contextRef = React.useRef<CanvasRenderingContext2D | null>(null);
  const [isCanvasReady, setIsCanvasReady] = React.useState(false);

  React.useLayoutEffect((): (() => void) => {
    if (!isCanvasReady) {
      return (): void => {};
    }

    const canvas = canvasRef.current;
    const context = contextRef.current;

    if (canvas) {
      canvas.height = innerHeight;
      canvas.width = innerWidth;
    }

    const handleMove = (e?: MouseEvent): void => {
      const position = e ? getPosition({ e, innerHeight, innerWidth }) : 0.5;

      if (context) {
        context.fillStyle = "#DDD";
        context.fillRect(0, 0, innerWidth, innerHeight);

        context.beginPath();
        context.fillStyle = "#333";
        context.moveTo(0, (position - 0.5) * innerHeight);
        context.lineTo(innerWidth, innerHeight * (position + 0.5));
        context.lineTo(innerWidth, 0);
        context.lineTo(0, 0);
        context.lineTo(0, (position - 0.5) * innerHeight);
        context.fill();
      }
    };

    window.addEventListener("mousemove", handleMove);
    handleMove();

    return (): void => window.removeEventListener("mousemove", handleMove);
  }, [isCanvasReady, innerWidth, innerHeight]);

  const ref = React.useCallback((el: HTMLCanvasElement | null): void => {
    canvasRef.current = el;
    contextRef.current = el ? el.getContext("2d", { alpha: false }) : null;
    setIsCanvasReady(el !== null);
  }, []);

  return <canvas className={cx("canvas")} ref={ref} />;
}

export default React.memo(Triangle);
