import Nozes from '../../../nozes.js';
import actions from '../store.js';

const { form, input } = Nozes;

export default function InputForm() {
  console.log('InputForm');

  const handleSubmit = e => {
    e.preventDefault();
    let { input_task } = e.target;
    actions.add(input_task.value);
    input_task.value = '';
  };

  return form(
    { id: 'form_task', onsubmit: handleSubmit },
    input({
      id: 'input_task',
      placeholder: 'Type a task',
      style: 'width: 476px',
      autofocus: true
    })
  );
}
