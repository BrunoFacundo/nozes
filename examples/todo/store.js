import { createStore } from '../../provider.js';

let state = {
    tasklist: []
};

let actions = {
    add: value => {
        state.tasklist.push(value);
    },
    remove: index => {
        state.tasklist.splice(index, 1);
    },
    reverse: () => {
        state.tasklist.reverse();
    }
};

export default createStore(state, actions);
