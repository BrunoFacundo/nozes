let STATE = {};
let COMPONENTS = [];

export function createStore(_state, _actions) {
  STATE = _state;
  let actions = {};

  for (let name of Object.keys(_actions)) {
    actions[name] = (...params) => {
      _actions[name](...params);
      shouldComponentsUpdate();
    };
  }

  return actions;
}

export function connect(Component, mapState) {
  return (props = {}) => {
    let propsState = mapState(STATE);
    let ref = Component({ ...props, ...propsState });
    let nonce = JSON.stringify(propsState);

    COMPONENTS.push({ Component, mapState, props, ref, nonce });

    return ref;
  };
}

function shouldComponentsUpdate() {
  for (let [index, { Component, mapState, props, ref, nonce }] of COMPONENTS.entries()) {
    let propsState = mapState(STATE);
    let newNonce = JSON.stringify(propsState);

    if (newNonce != nonce) {
      ref.replaceWith((ref = Component({ ...props, ...propsState })));
      COMPONENTS[index] = { Component, mapState, props, ref, nonce: newNonce };
    }
  }
}
