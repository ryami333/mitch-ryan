// @flow

export const UPDATE_MOUSE_POSITION = 'UPDATE_MOUSE_POSITION';

export function updateMousePosition({ x, y }) {
    return {
        type: UPDATE_MOUSE_POSITION,
        x,
        y,
    };
}
