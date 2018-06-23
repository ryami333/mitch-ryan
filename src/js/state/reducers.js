import { UPDATE_MOUSE_POSITION, UPDATE_WINDOW_DIMENSIONS } from './actions';

const DEFAULTS = {
    mouse: {
        x: null,
        y: null,
    },
};

export default function(state = DEFAULTS, action) {
    switch (action.type) {
        case UPDATE_MOUSE_POSITION: {
            return {
                ...state,
                mouse: {
                    x: action.x,
                    y: action.y,
                },
            };
        }
        default:
            return state;
    }
}
