import Nozes from '../../../nozes.js';
import { connect } from '../../../provider.js';
import actions from '../store.js';

const { div, button, b, span } = Nozes;

function Footer({ tasklistLength }) {
  console.log('Footer');

  return div(
    button({ style: 'float: right', onclick: () => actions.reverse() }, 'Reverse'),
    b('Total: '),
    span(tasklistLength)
  );
}

export default connect(
  Footer,
  state => ({
    tasklistLength: state.tasklist.length
  })
);
