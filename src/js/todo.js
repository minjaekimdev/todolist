import { buttonClickAndOpenModal, inputAndCloseModal } from './modal.js';

function todo() {
  const $todos = document.querySelector('#to_dos');
  const $todos_button1 = $todos.querySelector('.button1');
  const $todos_button2 = document.querySelector('#todos_button2');
  const $todos_modal = document.querySelector('#todos_modal');
  const $todos_modal_input = $todos_modal.querySelector('.modal_input');

  $todos.number = 0;

  buttonClickAndOpenModal($todos_button1, $todos_modal, $todos_modal_input);
  inputAndCloseModal($todos_button2, $todos_modal_input, $todos, $todos_modal);
}

export default todo;