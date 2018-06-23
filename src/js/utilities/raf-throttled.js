// @flow

function throttled<Args: *, Fn: Args => Promise<*>>(fn: Fn): Args => void {
    let raf: ?AnimationFrameID;

    return () => {
        const args = arguments;
        raf =
            raf ||
            this.requestAnimationFrame(() => {
                fn(...args).then(() => {
                    raf = null;
                });
            });
    };
}

export default throttled;
