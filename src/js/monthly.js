import { buttonClickAndOpenModal, inputAndCloseModal } from './modal.js';

function monthly() {
  const $monthly_plans = document.querySelector('#monthly_plans');
  const $monthlys_button1 = $monthly_plans.querySelector('.button1');
  const $monthlys_button2 = document.querySelector('#monthlys_button2');
  const $monthlys_modal = document.querySelector('#monthlys_modal');
  const $monthlys_modal_input = $monthlys_modal.querySelector('.modal_input');

  $monthly_plans.number = 0;

  buttonClickAndOpenModal($monthlys_button1, $monthlys_modal, $monthlys_modal_input);
  inputAndCloseModal($monthlys_button2, $monthlys_modal_input, $monthly_plans, $monthlys_modal);
}

export default monthly;