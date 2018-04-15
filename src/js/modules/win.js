const win = {};

function update() {
    const { innerHeight, innerWidth } = window;

    Object.assign(win, {
        innerHeight,
        innerWidth,
    });
}

update();

window.addEventListener('resize', update);
document.addEventListener('DOMContentLoaded', update);
document.addEventListener('ready', update);

export default win;
