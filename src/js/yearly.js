import { buttonClickAndOpenModal, inputAndCloseModal } from './modal.js';

function yearly() {
  const $yearly_plans = document.querySelector('#yearly_plans');
  const $yearlys_button1 = $yearly_plans.querySelector('.button1');
  const $yearlys_button2 = document.querySelector('#yearlys_button2');
  const $yearlys_modal = document.querySelector('#yearlys_modal');
  const $yearlys_modal_input = $yearlys_modal.querySelector('.modal_input');

  $yearly_plans.number = 0;

  buttonClickAndOpenModal($yearlys_button1, $yearlys_modal, $yearlys_modal_input);
  inputAndCloseModal($yearlys_button2, $yearlys_modal_input, $yearly_plans, $yearlys_modal);
}

export default yearly;