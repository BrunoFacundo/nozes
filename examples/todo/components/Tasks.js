import Nozes from '../../../nozes.js';
import { connect } from '../../../provider.js';
import actions from '../store.js';

const { ul, li, a } = Nozes;

function Tasks ({tasklist}) {
  console.log('Tasks');

  return ul(
      ...tasklist.map((text, i) =>
          li(
              text,
              a({ style: 'float: right', onclick: () => actions.remove(i) }, 'X')
          )
      )
  );
};

export default connect(
    Tasks,
    state => ({
        tasklist: state.tasklist
    })
);
