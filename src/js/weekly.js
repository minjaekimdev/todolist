import { buttonClickAndOpenModal, inputAndCloseModal } from './modal.js';

function weekly() {
  const $weekly_plans = document.querySelector('#weekly_plans');
  const $weeklys_button1 = $weekly_plans.querySelector('.button1');
  const $weeklys_button2 = document.querySelector('#weeklys_button2');
  const $weeklys_modal = document.querySelector('#weeklys_modal');
  const $weeklys_modal_input = $weeklys_modal.querySelector('.modal_input');

  $weekly_plans.number = 0;

  buttonClickAndOpenModal($weeklys_button1, $weeklys_modal, $weeklys_modal_input);
  inputAndCloseModal($weeklys_button2, $weeklys_modal_input, $weekly_plans, $weeklys_modal);
}

export default weekly;