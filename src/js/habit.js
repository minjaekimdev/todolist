import { buttonClickAndOpenModal, inputAndCloseModal } from './modal.js';

function habit() {
  const $habits = document.querySelector('#habits');
  const $habits_button1 = $habits.querySelector('.button1');
  const $habits_button2 = document.querySelector('#habits_button2');
  const $habits_modal = document.querySelector('#habits_modal');
  const $habits_modal_input = $habits_modal.querySelector('.modal_input');

  $habits.number = 0;

  buttonClickAndOpenModal($habits_button1, $habits_modal, $habits_modal_input);
  inputAndCloseModal($habits_button2, $habits_modal_input, $habits, $habits_modal);
}

export default habit;