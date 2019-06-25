import Nozes from '../../../nozes.js';
import InputForm from './InputForm.js';
import Tasks from './Tasks.js';
import Footer from './Footer.js';

const { div, h1 } = Nozes;

export default function App() {
  console.log('App');

  return div(
    h1('Todo List'),
    InputForm(),
    Tasks(),
    Footer()
  );
}
